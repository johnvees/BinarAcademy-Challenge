import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../utils';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {ILWaving} from '../../assets';

const Header = ({type, name, img}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.welcome} ellipsizeMode="tail" numberOfLines={1}>
            Welcome {name} <Image source={ILWaving} style={styles.waving} />{' '}
          </Text>
          <Text style={styles.desc}>Let's relax and read some reviews !</Text>
        </View>
        <Image source={img} style={styles.avatar} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcome: {
    fontSize: moderateScale(16),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    maxWidth: widthPercentageToDP('80%'),
    marginBottom: moderateScale(8),
  },
  waving: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  desc: {
    fontSize: moderateScale(16),
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  avatar: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
});
