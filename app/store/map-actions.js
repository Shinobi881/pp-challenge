import { bindActionCreators } from 'redux';
import * as actions from '../actions';

export default (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
