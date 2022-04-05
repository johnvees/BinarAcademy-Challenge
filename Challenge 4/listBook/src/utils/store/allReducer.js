import {combineReducers} from 'redux';
import HomeReducer from '../../screens/Home/redux/reducer';
import LoginReducer from '../../screens/Login/redux/reducer';
import Global from './globalReducer';

export const allReducers = combineReducers({
  home: HomeReducer,
  login: LoginReducer,
  Global,
});
