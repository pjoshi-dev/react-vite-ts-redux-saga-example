import React from 'react';
import { Button } from '@mui/material';

import { useDispatch } from 'react-redux';
import { fetchUsersAction } from '../../store/users/action';
import UsersTable from './UsersTable';

const UserScreen = () => {
  const dispatch = useDispatch();

  const fetchUsersFromService = () => {
    const userId = '123';
    const url = 'https://jsonplaceholder.typicode.com/users';
    dispatch(fetchUsersAction(url));
  };
  const fetchUsersFromServiceError = () => {
    const userId = '123';
    const url = '1nplaceholder.typicode.com/users';
    dispatch(fetchUsersAction(url));
  };

  return (
    <div>
      <Button variant="contained" onClick={fetchUsersFromService}>
        Fetch users
      </Button>
      &nbsp;
      <Button variant="outlined" color="error" onClick={fetchUsersFromServiceError}>
        Fetch users - Err
      </Button>
      <UsersTable />
    </div>
  );
};

interface UserPropsType {
  name: string;
  age: number;
  userId: string;
}

export default UserScreen;
