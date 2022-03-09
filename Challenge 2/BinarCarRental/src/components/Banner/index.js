import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {CarBanner} from '../../assets';
import Button from '../Button';
import {fonts} from '../../utils/fonts';

const Banner = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Sewa Mobil Berkualitas di kawasanmu</Text>
          <Button type="primary" title="Sewa Mobil" onPress={onPress} />
          <View style={styles.imageContainer}>
            <Image source={CarBanner} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: -windowHeight * 0.09,
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: colors.text.menuActive,
    borderRadius: 8,
  },
  textContainer: {
    paddingTop: 24,
    paddingStart: 24,
  },
  title: {
    maxWidth: '70%',
    marginBottom: 24,
    fontSize: 20,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  imageContainer: {
    marginTop: -80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
