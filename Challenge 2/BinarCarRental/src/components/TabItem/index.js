import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  ICHomeActive,
  ICHomeInactive,
  ICCarListActive,
  ICCarListInactive,
  ICAccountActive,
  ICAccountInactive,
} from '../../assets';
import {colors} from '../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? <ICHomeActive /> : <ICHomeInactive />;
    if (label === 'CarList')
      return isFocused ? <ICCarListActive /> : <ICCarListInactive />;
    if (label === 'Account')
      return isFocused ? <ICAccountActive /> : <ICAccountInactive />;
    return <ICHomeInactive />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.label(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 43,
    paddingVertical: 8,
  },
  label: isFocused => ({
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 12,
    color: isFocused ? colors.text.menuActive : colors.text.menuActive,
  }),
});
