const getId = () => {
  let bufId = parseInt(window.localStorage.getItem('id'), 10) || 0;
  bufId += 1;
  window.localStorage.setItem('id', bufId);
  return bufId;
};

export {
  getId,
};
