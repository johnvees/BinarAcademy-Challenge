import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {ScrollView} from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors, fonts} from '../../utils';
import {ILPoster} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';

const DetailsHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
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
            <TouchableOpacity>
              <Feather
                name="share"
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
          <Image source={ILPoster} style={styles.moviePoster} />
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
                <Text style={styles.detailStatus}>18+</Text>
              </View>
            </View>
            <View style={styles.movieDetails}>
              <FontAwesome5
                name="clock"
                size={moderateScale(18)}
                color={colors.white}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.status}>Duration</Text>
                <Text style={styles.detailStatus}>1h 27m</Text>
              </View>
            </View>
            <View style={styles.movieDetails}>
              <FontAwesome5
                name="heart"
                size={moderateScale(18)}
                color={colors.white}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.status}>Vote Average</Text>
                <Text style={styles.detailStatus}>70%</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.movieTitle}>
            Hotel Transylvania: Transformania
          </Text>
          <Text style={styles.movieTagline}>Change can be scary.</Text>
          <Text style={styles.movieDate}>2022-02-25</Text>
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
          <Text style={styles.movieSynopsis}>
            When Van Helsing's mysterious invention, the "Monsterfication Ray,"
            goes haywire, Drac and his monster pals are all transformed into
            humans, and Johnny becomes a monster. In their new mismatched
            bodies, Drac and Johnny must team up and race across the globe to
            find a cure before it's too late, and before they drive each other
            crazy.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: moderateScale(0.5),
            borderColor: colors.text.secondary,
            marginBottom: moderateScale(16),
          }}></View>
        <View>
          <Text style={styles.movieTitle}>Top Billed Cast</Text>
          <View>
            <Image source={ILPoster} style={styles.castImage} />
            <Text
              style={styles.castName}
              ellipsizeMode="tail"
              numberOfLines={1}>
              Selena Gomez
            </Text>
            <Text
              style={styles.castPeran}
              ellipsizeMode="tail"
              numberOfLines={1}>
              Mavis Dracula Voice
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
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
    marginBottom: moderateScale(5),
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
    marginBottom: moderateScale(16),
    textAlign: 'justify',
  },
  castImage: {
    width: moderateScale(70),
    height: moderateScale(90),
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(8),
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
    marginBottom: moderateScale(8),
  },
});
