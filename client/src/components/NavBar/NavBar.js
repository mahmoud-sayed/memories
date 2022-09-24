import React from 'react';
import { Typography, Box, Toolbar, IconButton, Stack, Avatar, Button } from '@mui/material';
import memories from '../../images/memories.png';
import { Link } from 'react-router-dom';

import { StyledAppBar } from './navbar-style.js';

const NavBar = () => {

  const user = null;
  return (
    <Box>
      <StyledAppBar position='static' color='inherit'>
        <Box>
          <Typography component={Link} style={{ color: 'rgba(0,138,255,1)' }} variant='h2' align='center'>Memories</Typography>
          <img style={{ marginLeft: '15px' }} src={memories} alt="memories logo" height='60' />
        </Box>
        <Toolbar>
          {user ? (
            <Stack>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography variant='h6'>{user.result.name}</Typography>
              <Button variant='contained' color='secondary'>LogOut</Button>
            </Stack>
          ) : (
            <Button component={Link} to="/auth" variant='contained' color='primary'>SignIn</Button>
          )}
        </Toolbar>
      </StyledAppBar>
    </Box >
  );
};

export default NavBar;

