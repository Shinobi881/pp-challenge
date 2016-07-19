const INITIAL_STATE = 'INITIAL_STATE';

export default (state = {}, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      let newState = Object.assign({}, state);
      newState.test = 'testing 123';

      // console.log(newState);
      return newState;
    default:
      return state;
  }
};
