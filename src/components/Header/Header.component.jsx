
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
      <Navbar data-testid='navbar'>
        <Div data-testid='leftElements'>
          <Button data-testid='hamburgerButton'>
            <MenuIcon data-testid='hamburgerIcon'/>
          </Button>
          <SearchIcon data-testid='searchIcon'/>
          <SearchInput data-testid='searchInput' placeholder="Search..."/>
        </Div>
        <Div data-testid='rightElements'>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  data-testid='darkModeSwitch'
                  checked={darkMode}
                  onChange={handleChange}
                  name="checkedB"
                  color={darkMode ? "secondary" : "primary"}
                />
              }
              label="Dark mode"
            />
          </FormGroup>
          <Button data-testid='loginButton' >
            <PersonIcon data-testid='personIcon' />
          </Button>
        </Div>
      </Navbar>
  );
}

export default Header