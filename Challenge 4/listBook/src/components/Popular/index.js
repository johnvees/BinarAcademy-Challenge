import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';

import Gap from '../Gap';
import {ILSampleCover} from '../../assets';
import {colors, fonts} from '../../utils';

const Popular = () => {
  return (
    <View>
      <Text style={styles.titleContent}>Popular e-Book</Text>
      <Gap height={ms(16)} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Image source={ILSampleCover} style={styles.bookCover} />
          <Gap height={ms(8)} />
          <View style={{maxWidth: styles.bookCover.width}}>
            <Text style={styles.bookTitle}>Mary Poppins</Text>
            <Gap height={ms(2)} />
            <Text style={styles.bookAuthor}>
              P.L. Travers |{' '}
              <Text style={styles.bookPublisher}>Scholastic</Text>
            </Text>
            <Gap height={ms(2)} />
            <View>
              <Text style={styles.bookPrice}>Rp 232.456</Text>
              <Gap height={ms(2)} />
              <Text style={styles.bookRating}>Rating</Text>
            </View>
          </View>
        </View>
        <View>
          <Image source={ILSampleCover} style={styles.bookCover} />
          <Gap height={ms(8)} />
          <View style={{maxWidth: styles.bookCover.width}}>
            <Text style={styles.bookTitle}>Mary Poppins</Text>
            <Gap height={ms(2)} />
            <Text style={styles.bookAuthor}>
              P.L. Travers |{' '}
              <Text style={styles.bookPublisher}>Scholastic</Text>
            </Text>
            <Gap height={ms(2)} />
            <View>
              <Text style={styles.bookPrice}>Rp 232.456</Text>
              <Gap height={ms(2)} />
              <Text style={styles.bookRating}>Rating</Text>
            </View>
          </View>
        </View>
        <View>
          <Image source={ILSampleCover} style={styles.bookCover} />
          <Gap height={ms(8)} />
          <View style={{maxWidth: styles.bookCover.width}}>
            <Text style={styles.bookTitle}>Mary Poppins</Text>
            <Gap height={ms(2)} />
            <Text style={styles.bookAuthor}>
              P.L. Travers |{' '}
              <Text style={styles.bookPublisher}>Scholastic</Text>
            </Text>
            <Gap height={ms(2)} />
            <View>
              <Text style={styles.bookPrice}>Rp 232.456</Text>
              <Gap height={ms(2)} />
              <Text style={styles.bookRating}>Rating</Text>
            </View>
          </View>
        </View>
      </View>
      <Gap height={ms(16)} />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  titleContent: {
    fontSize: ms(20),
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
  },
  bookCover: {
    width: ms(100),
    height: ms(140),
    borderRadius: ms(8),
    resizeMode: 'stretch',
  },
  bookTitle: {
    fontSize: ms(16),
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  bookAuthor: {
    fontSize: ms(12),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  bookPublisher: {
    fontSize: ms(12),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  bookPrice: {
    fontSize: ms(12),
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  bookRating: {
    fontSize: ms(12),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
