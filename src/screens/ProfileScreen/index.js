import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { getYoursBookmarks } from '../../services';
import Nav from './Nav';
import Main from './Main';
import Bookmarks from './Bookmarks';
import useProfile from '../../hooks/useProfile';

const ProfileScreen = () => {
  const [type, setType] = useState(0);
  const user = useProfile('', true);
  
  return (
    user && (
      <ScrollView>
        <Main user={user} />
        <SearchBar />
        <Nav type={type} setType={setType} />
        <Bookmarks userId={user.id} type={type} />
      </ScrollView>
    )
  );
};

const SearchBar = () => {
  return <View style={{ height: 39 }}></View>;
};

export default ProfileScreen;
