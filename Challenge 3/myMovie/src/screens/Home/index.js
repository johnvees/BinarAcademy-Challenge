import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ILAvatar} from '../../assets';
import {colors} from '../../utils';
import LatestMovies from '../../components/LatestMovie';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Yohanes Velly'} img={ILAvatar} />
      <LatestMovies />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
});
