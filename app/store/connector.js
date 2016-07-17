import { connect } from 'react-redux';
import mapStateToProps from './map-props';
import mapDispatchToProps from './map-actions';

export default connect(mapStateToProps, mapDispatchToProps);
