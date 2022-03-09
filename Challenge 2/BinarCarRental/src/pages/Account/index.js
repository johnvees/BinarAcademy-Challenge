import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Button} from '../../components';
import {ILPark} from '../../assets';

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Akun</Text>
      <View style={styles.content}>
        <Image source={ILPark} />
        <Text style={styles.textContent}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
          lebih mudah
        </Text>
        <Button
          type="primary"
          title="Register"
          onPress={() => navigation.replace('MainApp', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};

export default Account;

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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    marginVertical: 16,
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
