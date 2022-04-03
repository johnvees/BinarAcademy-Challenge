import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, Search} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../utils';
import {ms} from 'react-native-size-matters';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header type={'home'} title={'Discover'} />
      <Gap height={ms(24)} />
      <Search />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
});
