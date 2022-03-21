import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {} from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors, fonts} from '../../utils';
import {ILPoster} from '../../assets';

const DetailsHeader = () => {
  return (
    <View style={styles.container}>
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
              size={moderateScale(24)}
              color={colors.white}
            />
            <Text>Status</Text>
            <Text>18+</Text>
          </View>
          <View style={styles.movieDetails}>
            <FontAwesome5
              name="clock"
              size={moderateScale(24)}
              color={colors.white}
            />
            <Text>Duration</Text>
            <Text>1h 27m</Text>
          </View>
          <View style={styles.movieDetails}>
            <FontAwesome5
              name="heart"
              size={moderateScale(24)}
              color={colors.white}
            />
            <Text>Vote Average</Text>
            <Text>70%</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Hotel Transylvania: Transformania</Text>
        <Text>Change can be scary.</Text>
        <Text>2022-02-25</Text>
      </View>
      <View></View>
      <View>
        <Text>Synopsis</Text>
        <Text>lorem ipsum</Text>
      </View>
      <View></View>
      <View>
        <Text>Top Billed Cast</Text>
        <View>
          <Image />
          <Text>sapa ya</Text>
          <Text>perannya</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(24),
    paddingHorizontal: moderateScale(24),
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
    width: moderateScale(80),
    height: moderateScale(80),
    borderWidth: moderateScale(1),
    borderColor: colors.white,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    padding: moderateScale(4),
  },
});
