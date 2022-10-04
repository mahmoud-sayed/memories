import React, { useState, useEffect } from 'react';
import { Typography, Box, Toolbar, IconButton, Stack, Avatar, Button } from '@mui/material';
import memories from '../../images/memories.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { StyledAppBar } from './navbar-style.js';
import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/AuthReducer/Action';

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  console.log(user);

  const handelLogOut = () => {
    logOut({ dispatch });
    navigate('/');
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <Box>
      <StyledAppBar position='static' color='inherit'>
        <Box sx={{ display: 'flex', alignItems: 'center' }} ml={3}>
          <Typography component={Link} to='/' style={{ color: 'rgba(0,138,255,1)' }} variant='h2' align='center'>Memories</Typography>
          <img style={{ marginLeft: '15px' }} src={memories} alt="memories logo" height='60' />
        </Box>
        <Toolbar>
          {user ? (
            <Stack direction='row' spacing={2.5} alignItems='center'>
              <Avatar alt={user.name} src={user.picture}>
                {user.name}
              </Avatar>
              <Typography variant='h6'>{user.name}</Typography>
              <Button variant='contained' color='secondary' onClick={handelLogOut}>LogOut</Button>
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

