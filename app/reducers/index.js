import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import initialReducer from './initial-reducer';
import searchReducer from './search-reducer';

export default combineReducers({
  initialReducer,
  searchReducer
});
