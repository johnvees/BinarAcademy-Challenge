import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  ACCESS_TOKEN,
  BASE_URL,
  colors,
  credits,
  fonts,
  ImageUrl,
} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import Skeleton from '../Skeleton';
import Share from 'react-native-share';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const DetailsHeader = ({navigation, route, skel}) => {
  const [details, setDetails] = useState([]);
  const [casting, setCasting] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  });

  const getMovieDetail = async () => {
    try {
      setDetails('');
      const result = await axios.get(`${BASE_URL}/${route.params.id}`);
      setDetails(result.data);
      console.log(result);
      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCastDetail = async () => {
    try {
      setCasting('');
      const resultCast = await axios.get(
        `${credits}/${route.params.id}/credits`,
        {
          headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
        },
      );
      setCasting(resultCast.data);
      console.log(resultCast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  useEffect(() => {
    getCastDetail();
  }, []);

  const customShare = async () => {
    const shareOptions = {
      message: 'This is a test share massage',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.backgroundScreen,
        padding: moderateScale(24),
      }}>
      {loading ? (
        <Skeleton skel={'detail'} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="chevron-left"
                size={moderateScale(24)}
                color={colors.white}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Movie Detail</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{marginEnd: moderateScale(16)}}>
                <Feather
                  name="heart"
                  size={moderateScale(24)}
                  color={colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={customShare}>
                <Feather
                  name="share-2"
                  size={moderateScale(24)}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: moderateScale(24),
            }}>
            <Image
              source={{uri: `${details.poster_path}`}}
              style={styles.moviePoster}
            />
            <View
              style={{
                height: styles.moviePoster.height,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View style={styles.movieDetails}>
                <FontAwesome5
                  name="exclamation-circle"
                  size={moderateScale(18)}
                  color={colors.white}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.status}>Status</Text>
                  <Text style={styles.detailStatus}>{details.status}</Text>
                </View>
              </View>
              <View style={styles.movieDetails}>
                <FontAwesome5
                  name="clock"
                  size={moderateScale(18)}
                  color={colors.white}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.status}>Runtime</Text>
                  <Text style={styles.detailStatus}>{details.runtime}</Text>
                </View>
              </View>
              <View style={styles.movieDetails}>
                <FontAwesome5
                  name="vote-yea"
                  size={moderateScale(18)}
                  color={colors.white}
                />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.status}>Vote Average</Text>
                  <Text style={styles.detailStatus}>
                    {details.vote_average}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.movieTitle}>{details.original_title}</Text>
            <Text style={styles.movieTagline}>{details.tagline}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={details.genres}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => (
                <Text style={styles.movieTagline}>{item.name} | </Text>
              )}
            />
            <Text style={styles.movieDate}>{details.release_date}</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: moderateScale(0.5),
              borderColor: colors.text.secondary,
              marginBottom: moderateScale(16),
            }}></View>
          <View>
            <Text style={styles.movieTitle}>Synopsis</Text>
            <Text style={styles.movieSynopsis}>{details.overview}</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: moderateScale(0.5),
              borderColor: colors.text.secondary,
              marginBottom: moderateScale(16),
            }}></View>
          <Text style={styles.movieTitle}>Cast</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={casting.cast}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <View>
                <Image
                  source={{uri: `${ImageUrl}${item.profile_path}`}}
                  style={styles.castImage}
                />
                <Text
                  style={styles.castName}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {item.name}
                </Text>
                <Text
                  style={styles.castPeran}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {item.character}
                </Text>
              </View>
            )}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
    flex: 1,
    backgroundColor: colors.black,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(32),
  },
  title: {
    marginStart: moderateScale(24 + 16),
    fontSize: moderateScale(20),
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
  moviePoster: {
    width: moderateScale(210),
    height: moderateScale(315),
    borderRadius: moderateScale(20),
  },
  movieDetails: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderWidth: moderateScale(1),
    borderColor: colors.white,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(4),
    paddingVertical: moderateScale(12),
  },
  status: {
    fontSize: moderateScale(12),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  detailStatus: {
    fontSize: moderateScale(12),
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  movieTitle: {
    fontSize: moderateScale(20),
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginBottom: moderateScale(8),
  },
  movieTagline: {
    fontSize: moderateScale(14),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: moderateScale(5),
  },
  movieDate: {
    fontSize: moderateScale(14),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: moderateScale(16),
  },
  movieSynopsis: {
    fontSize: moderateScale(14),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: moderateScale(8),
    textAlign: 'justify',
  },
  castImage: {
    width: moderateScale(70),
    height: moderateScale(90),
    borderRadius: moderateScale(8),
    marginEnd: moderateScale(16),
  },
  castName: {
    maxWidth: moderateScale(70),
    fontSize: moderateScale(12),
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginBottom: moderateScale(2),
  },
  castPeran: {
    maxWidth: moderateScale(70),
    fontSize: moderateScale(12),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: moderateScale(16),
  },
});
