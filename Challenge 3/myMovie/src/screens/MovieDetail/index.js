import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../utils';
import {DetailsHeader} from '../../components';

const MovieDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DetailsHeader />
    </SafeAreaView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
});
