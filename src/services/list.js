import request from '../utils/request';

const getList = (pageNumber = 0) => {
  return request('/api/list', {
    method: 'post',
    data: {
      pageNumber,
    },
  });
};

export {
  getList,
};
