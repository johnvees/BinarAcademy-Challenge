import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, colors, fonts} from '../../utils';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';

const Poster = () => {
  const [movies, setMovies] = useState([]);

  const getLatestMovieList = async () => {
    try {
      setMovies('');
      const result = await axios.get(`${BASE_URL}`);
      setMovies(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLatestMovieList();
  }, []);

  const cardMovie = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => null}>
          <Image source={{uri: `${item.poster_path}`}} style={styles.poster} />
          <View style={{maxWidth: styles.poster.width}}>
            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
              {item.original_title}
            </Text>
            <Text style={styles.date}>{item.release_date}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item, index) => index}
        renderItem={cardMovie}
      />
    </SafeAreaView>
  );
};

export default Poster;

const styles = StyleSheet.create({
  poster: {
    width: moderateScale(120),
    height: moderateScale(180),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(16),
    marginBottom: moderateScale(5),
  },
  title: {
    fontSize: moderateScale(16),
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
    marginBottom: moderateScale(3),
  },
  date: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
