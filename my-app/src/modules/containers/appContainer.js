import { connect } from 'react-redux';
import App from '../../App';
import retryAction from '../actions/retryAction';

let mapStateToProps = (state) => ({
  results: state.results
});

let mapDispatchToProps = (dispatch) => ({
  retryAction: () => {
    dispatch(retryAction())
  }
});

let appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;