import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {Header, Banner, Feature, ListCar} from '../../components/';
import {colors, fonts} from '../../utils';

const Home = ({navigation, onPress}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.card} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header name="Yohanes Velly Sabattino" location="Surabaya" />
        <Banner
          onPress={() => navigation.replace('MainApp', {screen: 'Car List'})}
        />
        <Feature
          onPress={() => navigation.replace('MainApp', {screen: 'Car List'})}
        />
        <Text style={styles.title}>Daftar Mobil Pilihan</Text>
        <ListCar
          title="Mobil Bagus Sekali"
          passenger="4"
          luggage="4"
          price="100 jt"
        />
        <ListCar
          title="Mobil Bagus Banget Lho"
          passenger="8"
          luggage="2"
          price="250 jt"
        />
        <ListCar
          title="Mobil Bagus Sekali Sangat"
          passenger="2"
          luggage="0"
          price="1 M"
        />
        <View style={{marginBottom: 24}}></View>
      </ScrollView>
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
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
});
