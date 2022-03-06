import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {Header, Banner, Feature} from '../../components/';
import {colors} from '../../utils';

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.card} />
      <Header name="Yohanes Velly Sabattino" location="Surabaya" />
      <Banner />
      <Feature />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
