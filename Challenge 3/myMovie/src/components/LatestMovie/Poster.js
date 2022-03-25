import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {BASE_URL, colors, fonts} from '../../utils';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Skeleton from '../Skeleton';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Poster = ({skel}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  });

  const getLatestMovieList = async () => {
    try {
      setMovies('');
      const result = await axios.get(`${BASE_URL}`);
      setMovies(result.data.results);
      if (loading) {
        setLoading(false);
      }
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailsHeader', {
              id: `${item.id}`,
            })
          }>
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
      {loading ? (
        <Skeleton skel={'home'} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movies}
          keyExtractor={(item, index) => index}
          renderItem={cardMovie}
        />
      )}
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
