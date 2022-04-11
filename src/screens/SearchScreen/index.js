import {
  StyleSheet,
  Pressable,
  View,
  VirtualizedList,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from '../../components/Input';
import { getSearch } from '../../services';
import { baseUrl } from '../../constants/urls';
import { TextPrimary } from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
const Search = ({ navigation }) => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <TextInput
          onChangeText={(e) => {
            setInput(e);
            setPage(1);
            setResults([]);
          }}
          defaultValue={input}
          placeholder="Search something"
        />
      ),
    });
  }, []);

  useEffect(() => {
    let timeout = setTimeout(fetchMore, 500);
    return () => clearTimeout(timeout);
  }, [input]);

  const fetchMore = () => {
    getSearch(input, page).then((data) => setResults((e) => e.concat(data)));
    setPage((e) => e + 1);
  };

  return (
    <VirtualizedList
      data={results}
      getItem={(data, idx) => data[idx]}
      getItemCount={(data) => data.length}
      renderItem={({ item }) => <MangaPreview manga={item} />}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.01}
    />
  );
};

const MangaPreview = ({ manga }) => {
  const navigate = useNavigation();
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginVertical: 5,
        paddingBottom: 10,
        borderBottomColor: 'darkgray',
        borderBottomWidth: 1,
        borderRadius: 1,
      }}
      onPress={() => {
        console.log(manga.dir);

        navigate.navigate('Manga', { title: manga.dir });
      }}
    >
      <Image
        style={{ width: 80, height: 130, marginRight: 20, borderRadius: 10 }}
        source={{ uri: `${baseUrl}/${manga.img.mid}` }}
      />
      <View style={{ flex: 1 }}>
        <TextPrimary size={15} weight={500}>
          {manga.rus_name}
        </TextPrimary>
        <TextPrimary size={13} weight={400}>
          {manga.en_name}
        </TextPrimary>
      </View>
    </Pressable>
  );
};

export default Search;

const styles = StyleSheet.create({});
