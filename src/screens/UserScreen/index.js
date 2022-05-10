import React, { useEffect, useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { getYoursBookmarks } from '../../services';
import Nav from './Nav';
import Main from './Main';
import Bookmarks from './Bookmarks';
import useProfile from '../../hooks/useProfile';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

const screenWidth = Dimensions.get('window').width;

const UserScreen = ({ route }) => {
  const [type, setType] = useState(0);
  const { user, loggedInUser } = useProfile(route?.params?.user);
  const [bookmarksData, setBookmarksData] = useState([]);
  const { theme } = useTheme();

  return user ? (
    <ScrollView>
      <Main user={user} loggedInUser={loggedInUser} />
      <SearchBar />
      <Nav type={type} setType={setType} bookmarksData={bookmarksData} />
      <Bookmarks
        userId={user.id}
        type={type}
        setBookmarksData={setBookmarksData}
        loggedInUser={loggedInUser}
      />
    </ScrollView>
  ) : (
    <View style={{ backgroundColor: theme.foreground }}>
      <Placeholder />
    </View>
  );
};

const SearchBar = () => {
  return <View style={{ height: 39 }}></View>;
};

const Placeholder = () => {
  return (
    <ContentLoader width={screenWidth} height={1000}>
      <Rect x={0} y={0} width={screenWidth} height={160} />
      <Rect x={16} y={170} width={60} height={60} rx={3} />
      <Rect x={90} y={180} width={100} height={10} rx={3} />
      <Rect x={90} y={200} width={150} height={10} rx={3} />
      <Rect x={16} y={240} width={80} height={20} rx={3} />
      <Rect x={110} y={240} width={100} height={20} rx={3} />
      <Rect x={16} y={270} width={220} height={16} rx={3} />
      {/* Bookmarks Tabs */}
      <Rect x={16} y={340} width={90} height={26} rx={3} />
      <Rect x={120} y={340} width={100} height={26} rx={3} />
      <Rect x={230} y={340} width={80} height={26} rx={3} />
      <Rect x={320} y={340} width={90} height={26} rx={3} />
      {/* Bookmarks */}
      {Array.from(new Array(5)).map((_, index) => (
        <React.Fragment key={index}>
          <Rect x={16} y={380 + 90 * index} width={60} height={80} rx={3} />
          <Rect x={90} y={390 + 90 * index} width={220} height={16} rx={3} />
          <Rect x={90} y={416 + 90 * index} width={140} height={12} rx={3} />
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};

export default UserScreen;
