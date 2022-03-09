import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import IconOnly from './IconOnly';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';

const Button = ({type, title, onPress, icon}) => {
  if (type === 'icon-only') {
    return (
      <View>
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
          <IconOnly icon={icon} onPress={onPress} />
        </TouchableOpacity>
        <Text style={styles.text(type)}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'primary' ? colors.button.background : colors.icon.background,
    padding: type === 'primary' ? 10 : 20,
    paddingHorizontal: type === 'primary' ? 16 : 20,
    maxWidth: type === 'primary' ? '40%' : '100%',
    borderRadius: 10,
  }),
  text: type => ({
    marginTop: type === 'primary' ? 0 : 8,
    fontSize: type === 'primary' ? 16 : 13,
    textAlign: 'center',
    fontFamily: type === 'primary' ? fonts.primary[700] : fonts.primary[300],
    color: type === 'primary' ? colors.text.secondary : colors.text.primary,
  }),
});
