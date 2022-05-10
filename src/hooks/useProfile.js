import { useEffect, useState } from 'react';
import { getCurrentUser, getUserData } from '../services';

const useProfile = (userId) => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(false);
  const fetchUser = async () => {
    const loggedInUser = await getCurrentUser();
    if (!userId) {
      setLoggedInUser(true);
      setUser(loggedInUser);
      return;
    }
    const targetUser = await getUserData(userId);
    if (targetUser.id === loggedInUser.id) {
      setLoggedInUser(true);
    }
    setUser(targetUser);
  };

  useEffect(() => {
    setLoggedInUser(false);
    fetchUser();
  }, [userId]);

  return { user, loggedInUser };
};

export default useProfile;
