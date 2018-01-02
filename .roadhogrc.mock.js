import newFormSubmit from './mock/newFormSubmit.json';

export default {
  'GET /api/submitData': (req, res) => {
    res.send(newFormSubmit);
  },
  'POST /api/list': (req, res) => {
    res.send(require('./mock/list.json'));
  },
  'GET /api/detail/:id': (req, res) => {
    res.send({
      title: '这是title',
      content: '这是 content',
      startTime: '1514882948000',
      endTime: '1514969348000',
      push: true
    });
  }
};
