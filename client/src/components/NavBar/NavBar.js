import React from 'react';
import { Typography, Box } from '@material-ui/core';
import memories from '../../images/memories.png';

import { StyledAppBar } from './navbar-style.js';

const NavBar = () => {
  return (
    <Box>
      <StyledAppBar position='static' color='inherit'>
        <Typography style={{ color: 'rgba(0,138,255,1)' }} variant='h2' align='center'>Memories</Typography>
        <img style={{ marginLeft: '15px' }} src={memories} alt="memories logo" height='60' />
      </StyledAppBar>
    </Box >
  );
};

export default NavBar;

