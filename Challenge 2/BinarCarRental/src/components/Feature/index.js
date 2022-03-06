import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../Button';

import {colors} from '../../utils';

const Feature = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="sewa-mobil" title="Sewa Mobil" />
      <Button type="icon-only" icon="oleh-oleh" title="Oleh-Oleh" />
      <Button type="icon-only" icon="penginapan" title="Penginapan" />
      <Button type="icon-only" icon="wisata" title="Wisata" />
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
