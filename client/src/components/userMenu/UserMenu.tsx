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

const MenuContainer = styled.div`
  float: right;
`;

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const user = useContext(AuthContext);

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
        label="Age"
        size="small"
      >
        <MenuItem value={user.locale}>{user.locale}</MenuItem>
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
