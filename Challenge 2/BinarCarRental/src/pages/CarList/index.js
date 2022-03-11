import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {ListCar} from '../../components';

const CarList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Mobil Pilihan</Text>
      <ListCar />
      <View style={{marginBottom: 24}}></View>
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
    marginBottom: 16,
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
});
