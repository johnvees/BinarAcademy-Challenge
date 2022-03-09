import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {ListCar} from '../../components';
import {fonts} from '../../utils/fonts';

const CarList = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <ListCar
          title="Mobil Bagus Sekali"
          passenger="4"
          luggage="4"
          price="100 jt"
        />
        <ListCar
          title="Mobil Bagus Sekali"
          passenger="4"
          luggage="4"
          price="100 jt"
        />
        <ListCar
          title="Mobil Bagus Sekali"
          passenger="4"
          luggage="4"
          price="100 jt"
        />
        <ListCar
          title="Mobil Bagus Sekali"
          passenger="4"
          luggage="4"
          price="100 jt"
        />
        <ListCar
          title="Mobil Bagus Sekali"
          passenger="4"
          luggage="4"
          price="100 jt"
        />
        <View style={{marginBottom: 24}}></View>
      </ScrollView>
    </View>
  );
};

export default CarList;

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
