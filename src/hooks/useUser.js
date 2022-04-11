import { useContext } from 'react';
import UserContext from '../contexts/user/userContext';

const useUser = () => {
  const user = useContext(UserContext);
  if (user === undefined) {
    throw new Error('useUser must be used within a UserContext');
  }

  return user;
};

export default useUser;
