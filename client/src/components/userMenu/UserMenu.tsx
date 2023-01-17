import * as React from "react";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  Button,
  Popper,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useAuth } from "react-oauth2-pkce";
import styled from "@emotion/styled";

const MenuContainer = styled.div`
  float: right;
`

const UserMenu = () => {
  const { authService } = useAuth();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const user = useContext(AuthContext);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    localStorage.clear();
    authService.logout();
  };
  return (
    <MenuContainer>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <PersonIcon fontSize="small" />
        {user.username}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <Paper>
          <MenuList>
            <MenuItem>
              <ListItemText>Locale: {user.locale}</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText onClick={handleLogout}>Logout</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </MenuContainer>
  );
};

export default UserMenu;
