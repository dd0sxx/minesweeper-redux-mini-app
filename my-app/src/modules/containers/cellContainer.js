import { connect } from 'react-redux';
import Cell from '../../Cell';
import handleClick from '../actions/clickAction';

let mapStateToProps = (state) => ({

});

let mapDispatchToProps = (dispatch) => ({
  handleClick: (e) => {
    dispatch(handleClick(e));
  }
});

let cellContainer = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default cellContainer;