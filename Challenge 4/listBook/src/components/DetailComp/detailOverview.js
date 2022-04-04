import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';

import {colors, fonts} from '../../utils';
import Gap from '../Gap';

const detailOverview = () => {
  return (
    <View>
      <Text style={styles.title}>Overview</Text>
      <Gap height={ms(8)} />
      <Text style={styles.overview}>
        Harry Potter has no idea how famous he is. That's because he's being
        raised by his miserable aunt and uncle who are terrified Harry will
        learn that he's really a wizard, just as his parents were. But
        everything changes when Harry is summoned to attend an infamous school
        for wizards, and he begins to discover some clues about his illustrious
        birthright. From the surprising way he is greeted by a lovable giant, to
        the unique curriculum and colorful faculty at his unusual school, Harry
        finds himself drawn deep inside a mystical world he never knew existed
        and closer to his own noble destiny.
      </Text>
    </View>
  );
};

export default detailOverview;

const styles = StyleSheet.create({
  title: {
    fontSize: ms(20),
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
  },
  overview: {
    fontSize: ms(14),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
