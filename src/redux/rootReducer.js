import { combineReducers } from 'redux';
import { imageReducer } from './imageReducer/imageReducer';
import { nameReducer } from './nameReducer/nameReducer';

export const rootReducer = combineReducers({
  imageReducer,
  nameReducer,
});
