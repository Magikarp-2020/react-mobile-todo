import newFormSubmit from './mock/newFormSubmit.json';

export default {
  'GET /api/submitData': (req, res) => {
    res.send(newFormSubmit);
  },
  'POST /api/list': (req, res) => {
    res.send({
      'errorCode': 0,
      'status': true,
      'content': {
        'pageSize': 10,
        'pageNumber': 0,
        'total': 100,
        'content': [
          {
            'title': '标题',
            'content': '内容',
            'id': 1,
            'startTime': '1514969760000',
            'endTime': '1515056455000',
          },
          {
            'title': '标题',
            'content': '内容',
            'id': 2,
            'startTime': '1514970055000',
            'endTime': '1515056455000',
          }
        ]
      }
    });
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
