import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ILAvatar} from '../../assets';
import {colors} from '../../utils';
import {LatestMovie, PopularMovie} from '../../components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Yohanes Velly'} img={ILAvatar} />
      <LatestMovie />
      <PopularMovie />
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
