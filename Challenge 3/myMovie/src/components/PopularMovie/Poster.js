import {StyleSheet, Text, View, Image, RefreshControl} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import {BASE_URL, colors, fonts} from '../../utils';
import axios from 'axios';

import {ICStar} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import Button from '../Button';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Poster = () => {
  const [movies, setMovies] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  });

  const getPopularMovieList = async () => {
    try {
      setMovies('');
      const result = await axios.get(`${BASE_URL}`);
      setMovies(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovieList();
  }, []);

  const cardMovie = ({item, title}) => {
    return (
      <View>
        <View style={styles.content}>
          <Image source={{uri: `${item.poster_path}`}} style={styles.poster} />
          <View
            style={{
              flex: 1,
              height: styles.poster.height,
              paddingVertical: moderateScale(8),
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
                {item.original_title}
              </Text>
              <Text style={styles.desc}>{item.release_date}</Text>
              <Text style={styles.desc}>genre_id:{item.genre_ids}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Text style={styles.desc}>{item.vote_average} / 10 </Text>
                <Image
                  source={ICStar}
                  style={{
                    width: moderateScale(18),
                    height: moderateScale(18),
                  }}
                />
              </View>
            </View>
            <Button
              title={'Details'}
              onPress={() =>
                navigation.navigate('DetailsHeader', {
                  id: `${item.id}`,
                })
              }
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={(item, index) => index}
        renderItem={cardMovie}
      />
    </SafeAreaView>
  );
};

export default Poster;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  poster: {
    width: moderateScale(120),
    height: moderateScale(180),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(16),
    marginBottom: moderateScale(16),
  },
  title: {
    fontSize: moderateScale(16),
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
    marginBottom: moderateScale(8),
  },
  desc: {
    fontSize: moderateScale(14),
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginBottom: moderateScale(8),
  },
});
