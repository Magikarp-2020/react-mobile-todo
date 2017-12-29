import fetch from '../utils/request';

const submitNewForm = () => {
  return fetch('/api/submitData');
};

export {
  submitNewForm,
};
