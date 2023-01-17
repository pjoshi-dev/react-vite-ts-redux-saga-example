import React from 'react';
import { Button, Stack } from '@mui/material';

import { useDispatch } from 'react-redux';
import { login, logout } from '../../store/auth/action';

const AuthScreen = () => {
  const dispatch = useDispatch();

  const loginUser = () => {
    dispatch(login());
  };
  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <Stack direction={'row'} justifyContent={'space-around'}>
      <Button variant="contained" color="success" onClick={loginUser}>
        Login
      </Button>
      <Button variant="outlined" color="warning" onClick={logoutUser}>
        Logout
      </Button>
    </Stack>
  );
};

export default AuthScreen;
