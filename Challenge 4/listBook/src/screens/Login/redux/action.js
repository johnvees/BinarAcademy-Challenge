import axios from 'axios';
import {BASE_AUTH} from '../../../utils';
import {navigate} from '../../../utils/helpers/navigate';

export const postLoginAction = data => async dispatch => {
  try {
    const result = await axios.post(`${BASE_AUTH}/login`, data);

    if (result.status === 200) {
      dispatch(setLogin(result.data.results));
      console.log(result);
      console.log(result.data.tokens.access.token);
      dispatch(setToken(result.data.tokens.access.token));
      navigate('Home');
    }
  } catch (error) {
    console.log(error);
  }
};

setLogin = payload => {
  return {
    type: 'SET_POST_LOGIN',
    userDataLogin: payload,
  };
};

setToken = payload => {
  return {
    type: 'SET_TOKEN',
    token: payload,
  };
};
