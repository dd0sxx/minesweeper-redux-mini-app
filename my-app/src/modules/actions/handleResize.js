var handleResizeSize = (val) => ({
  type: 'RESIZE_SIZE',
  payload: {
    size: val,
  }
});

export default handleResizeSize;
