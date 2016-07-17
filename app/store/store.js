import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import initialReducer from '../reducers/initial-reducer';

export default createStore(rootReducer, {initialReducer}, applyMiddleware(thunk));
