import { connect } from 'react-redux';
import Board from '../../Board';

let mapStateToProps = (state) => ({
  exampleBoard: state.exampleBoard
});

let mapDispatchToProps = (dispatch) => ({

});

let boardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default boardContainer;