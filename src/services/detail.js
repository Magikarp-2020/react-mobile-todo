import request from '../utils/request';

const getDetail = (id = '') => {
  return request(`/api/detail/${id}`, {
    method: 'get',
  });
};

export {
  getDetail,
};
