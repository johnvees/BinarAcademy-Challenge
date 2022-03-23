import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {moderateScale} from 'react-native-size-matters';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button.background,
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(8),
  },
  buttonText: {
    fontSize: moderateScale(14),
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    textAlign: 'center',
  },
});
