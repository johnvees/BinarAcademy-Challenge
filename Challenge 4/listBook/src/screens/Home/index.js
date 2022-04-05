import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';

import {Gap, Header, Popular, Recommended, Search} from '../../components';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getRecommendedBookData} from './redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const {tokenValue} = useSelector(state => state.login);
  const {loading} = useSelector(state => state.Global);

  useEffect(() => {
    getBookData();
  }, [tokenValue]);

  const getBookData = () => {
    dispatch(getRecommendedBookData());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type={'home'} title={'Discover'} />
        {/* <Gap height={ms(16)} /> */}
        {/* <Search /> */}
        <Gap height={ms(24)} />
        <Recommended />
        <Gap height={ms(24)} />
        <Popular />
      </ScrollView>
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
