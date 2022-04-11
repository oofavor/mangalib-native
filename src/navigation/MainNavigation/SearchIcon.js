import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchIcon = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
      <MaterialIcons
        name="search"
        size={24}
        color="white"
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  );
};

export default SearchIcon;
