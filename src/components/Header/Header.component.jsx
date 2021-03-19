
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import { Navbar, Div, Button, SearchInput } from './HeaderStyles'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const handleChange = (event) => {
    darkMode 
      ? setDarkMode(false)
      : setDarkMode(true)
  };

  return (
      <Navbar>
        <Div style={{alignItems: "center"}}>
          <Button>
            <MenuIcon />
          </Button>
          <SearchIcon />
          <SearchInput placeholder="Search..."/>
        </Div>
        <Div style={{display: "flex"}}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleChange}
                  name="checkedB"
                  color={darkMode ? "secondary" : "primary"}
                />
              }
              label="Dark mode"
            />
          </FormGroup>
          <Button>
            <PersonIcon />
          </Button>
        </Div>
      </Navbar>
  );
}

export default Header