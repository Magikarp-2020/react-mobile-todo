import { deleteListId } from './list';

const getDetail = (id = '') => {
  return JSON.parse(window.localStorage.getItem(`todo-detail-${id}`));
};

const deleteById = (id = '') => {
  deleteListId(id);
};

export {
  getDetail,
  deleteById,
};
