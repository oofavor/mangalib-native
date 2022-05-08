import { useEffect, useState } from 'react';
import { getCurrentUser, getUserData } from '../services';

const useProfile = (userId, loggedInUser = false) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (loggedInUser) {
      getCurrentUser().then((res) => setUser(res));
    } else {
      getUserData(userId).then((res) => setUser(res));
    }
  }, []);

  return user;
};

export default useProfile;
