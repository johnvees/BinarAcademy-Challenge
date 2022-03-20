import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../utils';
import Poster from './Poster';

const LatestMovies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Latest Movies</Text>
      <Poster />
    </SafeAreaView>
  );
};

export default LatestMovies;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(24),
    marginTop: moderateScale(8),
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginBottom: moderateScale(16),
  },
});
