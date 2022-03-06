import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

import {CarImage} from '../../assets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#091B6F" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>BCR{'\n'}Binar Car Rental</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={CarImage} style={styles.image} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091B6F',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 32,
    color: colors.text.secondary,
    fontWeight: '700',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
});
