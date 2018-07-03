import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Details from './../components/Details';
import * as DetailPageActions from './../actions/DetailPageActions';

const mapStateToProps = (state) => {
 return {
   data: state.data
 };
};

const mapDispatchToProps = (dispatch) => ({
 actions: bindActionCreators(DetailPageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);