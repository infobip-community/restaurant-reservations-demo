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
import styled from "@emotion/styled";
import { getLanguagesList } from "../../services/languages";
import { UserContext } from "../../contexts/AuthContext";

const MenuContainer = styled.div`
  float: right;
`;

const LanguageLabel = styled.label`
  font-weight: 300;
  font-size: smaller;
`;

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const user = useContext(UserContext);
  const languages = getLanguagesList();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    user.onLogout();
  };

  return (
    <MenuContainer>
      <LanguageLabel>
        {
          languages.find((language) => language.localeFull === user.locale)
            ?.name
        }
      </LanguageLabel>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{ marginLeft: "1rem" }}
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
              <ListItemText onClick={handleLogout}>Logout</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </MenuContainer>
  );
};

export default UserMenu;
