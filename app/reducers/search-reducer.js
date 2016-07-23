import { SEARCH_LOCALES } from '../actions/types';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_LOCALES:
      const newState = Object.assign({}, state);
      console.log('Search reducer: ', state);
      newState.search = {
        query: action.payload,
        value: ''
      };
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
