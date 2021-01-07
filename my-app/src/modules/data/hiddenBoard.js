import neighborCounter from './neighborCounter';

let cellBuilder = (mine, row, index, array) => {
  return {
    'mine': mine,
    'row': row,
    'index': index,
    'value': neighborCounter(row, index, array),
    revealed: false
  }
};

export default cellBuilder;