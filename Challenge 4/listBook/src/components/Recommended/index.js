import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {ms} from 'react-native-size-matters';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Gap from '../Gap';
import {BASE_URL, colors, fonts, idrCurrency, TEMP_TOKEN} from '../../utils';
import {setRecommendedBook} from '../../screens/Home/redux/action';
import {FlatList} from 'react-native-gesture-handler';

const Recommended = () => {
  const dispatch = useDispatch();

  const {recommendedBook = []} = useSelector(state => state.home);

  const getRecommendedBook = async () => {
    const result = await axios.get(`${BASE_URL}`, {
      headers: {Authorization: `Bearer ${TEMP_TOKEN}`},
    });

    if (result.status === 200) {
      dispatch(setRecommendedBook(result.data.results));
      console.log(result);
    }
  };

  useEffect(() => {
    getRecommendedBook();
  }, []);

  const popularBookCard = ({item}) => {
    return (
      <View style={{marginEnd: ms(16)}}>
        <Image source={{uri: `${item.cover_image}`}} style={styles.bookCover} />
        <Gap height={ms(8)} />
        <View style={{maxWidth: styles.bookCover.width}}>
          <Text style={styles.bookTitle} ellipsizeMode="tail" numberOfLines={2}>
            {item.title}
          </Text>
          <Gap height={ms(2)} />
          <Text style={styles.bookAuthor}>{item.author}</Text>
          <Text style={styles.bookPublisher}>{item.publisher}</Text>
          <Gap height={ms(2)} />
          <View>
            <Text style={styles.bookPrice}>
              {idrCurrency.format(`${item.price}`)}
            </Text>
            <Gap height={ms(2)} />
            <Text style={styles.bookRating}>
              {item.average_rating} / 10{' '}
              <FontAwesome name="star" size={ms(14)} color="gold" />
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.titleContent}>Recommended e-Book</Text>
      <Gap height={ms(16)} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={recommendedBook}
        keyExtractor={item => item.id}
        renderItem={popularBookCard}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  titleContent: {
    fontSize: ms(20),
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
  },
  bookCover: {
    width: ms(124),
    height: ms(160),
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
