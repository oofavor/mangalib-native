import React, { useState, useEffect } from 'react';
import { getToken } from '../../utils/loginStorage';
import UserContext from './userContext';

const UserProvider = ({ children }) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    getToken().then((res) => {
      if (!res.error && res.value !== token) {
        setToken(res.value);
      }
    });
  };

  const value = { token, isLogged: token.length > 0, refetch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
