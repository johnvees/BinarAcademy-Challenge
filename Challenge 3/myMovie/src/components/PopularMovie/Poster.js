import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import {BASE_URL, colors, fonts} from '../../utils';
import axios from 'axios';

import {ICStar} from '../../assets';

const Poster = () => {
  const [movies, setMovies] = useState([]);

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

  const cardMovie = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => null}>
          <View style={styles.content}>
            <Image
              source={{uri: `${item.poster_path}`}}
              style={styles.poster}
            />
            <View
              style={{
                maxWidth: styles.poster.width,
                paddingVertical: moderateScale(8),
              }}>
              <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
                {item.original_title}
              </Text>
              <Text style={styles.desc}>{item.release_date}</Text>
              <Text style={styles.desc}>{item.genre_ids}</Text>
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
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
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
