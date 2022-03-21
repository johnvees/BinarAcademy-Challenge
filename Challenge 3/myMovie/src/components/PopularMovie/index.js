import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../utils';
import Poster from './Poster';

const PopularMovies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PopularMovies</Text>
      <Poster />
    </SafeAreaView>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(32),
    paddingHorizontal: moderateScale(24),
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.text.primary,
    fontFamily: fonts.primary[700],
    marginBottom: moderateScale(16),
  },
});
