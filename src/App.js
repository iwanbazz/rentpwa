import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CV Riau Indah Cemerlang</h1>
      <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<ListAltIcon />} />
        <BottomNavigationAction label="Nearby" icon={<AccountBoxIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
