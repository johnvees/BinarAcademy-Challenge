import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {ILSampleCover} from '../../assets';
import {ms} from 'react-native-size-matters';
import Button from '../Button';
import Gap from '../Gap';
import {colors, fonts} from '../../utils';

const detailHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={ILSampleCover} style={styles.bookCover} />
      <Gap width={ms(16)} />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingVertical: ms(16),
          height: styles.bookCover.height,
        }}>
        <View>
          <Text style={styles.bookTitle}>
            Harry Potter and the Half-Blood Prince
          </Text>
          <Gap height={ms(16)} />
          <Text style={styles.bookInfo}>
            Author By : <Text style={styles.bookDesc}>J. K. Rowling</Text>
          </Text>
          <Gap height={ms(8)} />
          <Text style={styles.bookInfo}>
            Publisher By : <Text style={styles.bookDesc}>Scholastic</Text>
          </Text>
          <Gap height={ms(16)} />
          <Text style={styles.bookInfo}>Users Rating</Text>
          <Gap height={ms(8)} />
          <Text style={styles.bookInfo}>
            Total Sales : <Text style={styles.bookDesc}>268</Text>
          </Text>
        </View>
        <Button type={'fullButton'} title={'Buy Rp 630.000'} />
      </View>
    </View>
  );
};

export default detailHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  bookCover: {
    width: ms(170),
    height: ms(250),
    borderRadius: ms(10),
    resizeMode: 'stretch',
  },
  bookTitle: {
    fontSize: ms(16),
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  bookInfo: {
    fontSize: ms(14),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  bookDesc: {
    fontSize: ms(14),
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
