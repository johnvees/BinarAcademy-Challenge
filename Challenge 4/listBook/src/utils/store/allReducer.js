import {combineReducers} from 'redux';
import HomeReducer from '../../screens/Home/redux/reducer';
import Global from './globalReducer';

export const allReducers = combineReducers({
  home: HomeReducer,
  Global,
});
