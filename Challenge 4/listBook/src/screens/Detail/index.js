import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';

import {colors} from '../../utils';
import {Gap, Header, Popular} from '../../components';
import {DetailHeader, DetailOverview} from '../../components/DetailComp';
import {ScrollView} from 'react-native-gesture-handler';

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type={'detail'} title={'Movie Detail'} />
        <Gap height={ms(24)} />
        <DetailHeader />
        <Gap height={ms(24)} />
        <DetailOverview />
        <Gap height={ms(24)} />
        <Popular />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
});
