import React from 'react';
import { Button } from '@mui/material';

import { useDispatch } from 'react-redux';

const UserScreen = () => {
  const dispatch = useDispatch();

  const fetchUsersFromService = () => {
    const userId = '123';
    dispatch({ type: 'USER_FETCH_REQUESTED', payload: { userId } });
  };

  return (
    <div>
      <Button variant="contained" onClick={fetchUsersFromService}>
        Fetch users
      </Button>
    </div>
  );
};

interface UserPropsType {
  name: string;
  age: number;
  userId: string;
}

export default UserScreen;
