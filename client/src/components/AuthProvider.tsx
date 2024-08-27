import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert, CircularProgress, Stack } from '@mui/material';
import { INFOBIP_API_BASE_URL, CLIENT_ID, REDIRECT_URL } from '../const';

export interface AuthContext {
  token: string;
  token_type: string;
  expires_in: number;
  accountKey: string;
  userKey: string;
  username: string;
  email: string;
  locale: string;
}

const authContext = createContext<AuthContext | null>(null);

export function useAuthContext(): AuthContext {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuthContext can be used only within AuthProvider');
  }

  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authContextState, setAuthContextState] = useState<AuthContext | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const conversationId = params.get('conversationId');

    if (authContextState) {
      return;
    }

    if (code) {
      // 2nd step - after redirect back to the app with access code param in the URL, retrieve token with user info
      setLoading(true);
      getToken(code)
        .then(response => {
          setAuthContextState(response);
          removeCodeFromLocation();
          setError(null);
          setLoading(false);
        })
        .catch(error => {
          setError(`An error occurred while getting token: ${error}`);
          setLoading(false);
        });
    } else if (state) {
      // 1st step - redirect to authorization endpoint in order to get access code using state param
      setLoading(true);
      try {
        authorizeWithRedirectBack(state, conversationId);
      } catch (error) {
        // the most probably because you are using insecure origin. Secure origins are HTTPS scheme or localhost/localhost IP address as host
        setError(`An error occurred while creating code challenge: ${error}`);
        setLoading(false);
      }
    } else {
      setError('Missing state');
    }
  }, [authContextState]);

  return (
    <>
      {isLoading && <Stack alignItems='center'><CircularProgress /></Stack>}
      {error && <Alert severity='error'>{error}</Alert>}
      {authContextState && <authContext.Provider value={authContextState}>{children}</authContext.Provider>}
    </>
  );
}

async function getToken(code: string) {
  const response = await fetch(`${INFOBIP_API_BASE_URL}/exchange/1/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code_verifier: getStoredCodeVerifier() ?? '',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URL,
      code
    })
  });

  return await response.json();
}

function removeCodeFromLocation() {
  const newUrlParams = new URLSearchParams(window.location.search);
  newUrlParams.delete('code');
  window.history.replaceState(null, '', `?${newUrlParams.toString()}`);
}

function authorizeWithRedirectBack(state: string, conversationId: string | null) {
  const codeVerifier = createCodeVerifier();
  storeCodeVerifier(codeVerifier);
  createCodeChallenge(codeVerifier)
    .then(codeChallenge => {
      const params = new URLSearchParams({
        response_type: 'code',
        code_challenge: codeChallenge,
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URL + (window.location.pathname ?? '') + (conversationId ? `?=conversationId=${conversationId}` : ''),
        scope: 'conversations',
        state
      });

      window.location.assign(`${INFOBIP_API_BASE_URL}/exchange/1/oauth/authorize?${params.toString()}`);
    });
}

async function createCodeChallenge(codeVerifier: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function createCodeVerifier(length: number = 128) {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let text = '';
  for (let i = 0; i < length; i++) {
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  return text;
}

function storeCodeVerifier(codeVerifier: string) {
  sessionStorage.setItem('codeVerifier', codeVerifier);
}

function getStoredCodeVerifier() {
  return sessionStorage.getItem('codeVerifier');
}