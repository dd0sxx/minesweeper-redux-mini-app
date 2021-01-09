var handleResizeMines = (val) => ({
  type: 'RESIZE_MINES',
  payload: {
    mines: val
  }
});

export default handleResizeMines