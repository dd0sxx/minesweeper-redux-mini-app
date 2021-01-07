var handleOneClick = (cell, x, y) => ({
  type: 'ONE_CLICK',
  payload: {
    result: 'Game Over',
    toggle: {x: x, y:y}
  }
});

export default handleOneClick;