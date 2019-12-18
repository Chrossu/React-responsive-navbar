import { combineReducers } from 'redux';
import sidedrawReducer from './sidedraw/sidedraw.reducer';

export default combineReducers({
  sidedraw: sidedrawReducer
});