import * as React from "react";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  Button,
  Popper,
  Select,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styled from "@emotion/styled";
import { getLanguagesList } from "../../services/languages";

const MenuContainer = styled.div`
  float: right;
`;

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const user = useContext(AuthContext);

  const languages = getLanguagesList()

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    user.onLogout();
  };

  return (
    <MenuContainer>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={user.locale}
        label="Language"
        size="small"
      >
        {languages.map(lang => {
          return <MenuItem value={lang.localeFull}>{lang.name}</MenuItem>
        }

        )}
      </Select>
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
