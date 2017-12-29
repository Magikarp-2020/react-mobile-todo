import newFormSubmit from './mock/newFormSubmit.json';

export default {
  'GET /api/submitData': (req, res) => {
    res.send(newFormSubmit);
  },
  'POST /api/list': (req, res) => {
    res.send(require('./mock/list.json'));
  },
};
