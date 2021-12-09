import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export default function ButtonAppBar() {

  return (
    <div style={{flexGrow:'1'}}>
      <AppBar position="static">
        <Toolbar>
            <h1>My Weather App</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}
