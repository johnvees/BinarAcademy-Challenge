import axios from 'axios';
import {BASE_URL, TEMP_TOKEN} from '../../../utils';
import {navigate} from '../../../utils/helpers/navigate';

axios.defaults.headers.Authorization = `Bearer ${TEMP_TOKEN}`;

export const getRecommendedBookData = () => async dispatch => {
  try {
    const result = await axios.get(`${BASE_URL}`);

    if (result.status === 200) {
      dispatch(setRecommendedBook(result.data.results));
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPopularBookData = () => async dispatch => {
  try {
    const result = await axios.get(`${BASE_URL}`);

    if (result.status === 200) {
      dispatch(setPopularBook(result.data.results));
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDetailBookById = id => async dispatch => {
  try {
    console.log(id);
    const result = await axios.get(`${BASE_URL}/${id}`);

    if (result.status === 200) {
      dispatch(setDetailBook(result.data));
      navigate('Detail', {id: `${id}`});
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};

export const setRecommendedBook = payload => {
  return {
    type: 'SET_RECOMMENDED_BOOK',
    dataRecommended: payload,
  };
};

export const setPopularBook = payload => {
  return {
    type: 'SET_POPULAR_BOOK',
    dataPopular: payload,
  };
};

const setDetailBook = payload => {
  return {
    type: 'SET_DETAIL_BOOK',
    dataDetailBook: payload,
  };
};
