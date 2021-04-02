
import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import { Navbar, Div, Button, SearchInput } from './HeaderStyles'
import { YoutubeContext } from '../../providers/Youtube';

const Header = () => {
  const { query } = useContext(YoutubeContext);
  const [ , setQueryString ] = query;

  let history = useHistory();

  const [darkMode, setDarkMode] = useState(false)
  const [value, setValue] = useState('')

  const handleSwitchChange = (event) => {
    darkMode 
      ? setDarkMode(false)
      : setDarkMode(true)
  };

  const handleInputChange = (event) => {
    setValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setQueryString(JSON.stringify(value))
    history.push('/')
  }

  return (
      <Navbar data-testid='navbar'>
        <Div data-testid='leftElements'>
          <Button data-testid='hamburgerButton'>
            <MenuIcon data-testid='hamburgerIcon'/>
          </Button>
          <SearchIcon data-testid='searchIcon'/>
          <form onSubmit={handleSubmit}>
            <SearchInput 
              data-testid='searchInput'
              placeholder="Search..."
              value={value}
              onChange={handleInputChange}
            />
          </form>
        </Div>
        <Div data-testid='rightElements'>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  data-testid='darkModeSwitch'
                  checked={darkMode}
                  onChange={handleSwitchChange}
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