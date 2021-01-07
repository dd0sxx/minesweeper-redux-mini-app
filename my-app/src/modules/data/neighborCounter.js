let neighborCounter = (row , index, array) => {
  let counter = 0;
  if (index > 0) {
    if (array[row][index - 1] === 1) { counter++ }
  }
  if (index < 9) {
    if (array[row][index + 1] === 1) { counter++ }
  }
  if (row > 0 && index > 0) {
    if (array[row - 1][index - 1] === 1) { counter++ }
  }
  if (row > 0){
    if (array[row - 1][index] === 1) { counter++ }
  }
  if (row > 0 && index < 9) {
    if (array[row - 1][index + 1] === 1) { counter++ }
  }
  if (row < 9 && index > 0) {
    if (array[row + 1][index - 1] === 1) { counter++ }
  }
  if(row < 9) {
    if (array[row + 1][index] === 1) { counter++ }
  }
  if (row < 9 && index < 9) {
    if (array[row + 1][index + 1] === 1) { counter++ }
  }

  return counter;
}

export default neighborCounter;