import {StyleSheet, Text, View, StatusBar,} from 'react-native';
import React from 'react';
import {Header, Banner, Feature, ListCar} from '../../components/';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.card} />
      <Header name="Yohanes Velly Sabattino" location="Surabaya" />
      <Banner
        onPress={() => navigation.replace('MainApp', {screen: 'Car List'})}
      />
      <Feature
        onPress={() => navigation.replace('MainApp', {screen: 'Car List'})}
      />
      <Text style={styles.title}>Daftar Mobil Pilihan</Text>
      <ListCar />
      <View style={{marginBottom: 24}}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    paddingStart: 16,
    marginTop: 24,
    marginBottom: 16,
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
});
