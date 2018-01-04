import { getDetail } from './detail';

const LOCAL_LIST_KEY = 'list';

const getList = () => {
  return getIdList().map((id) => {
    return getDetail(id);
  });
};

const getIdList = () => {
  let list = window.localStorage.getItem(LOCAL_LIST_KEY);
  list = list ? JSON.parse(list) : [];
  return list;
};

const setIdList = (ids) => {
  if (!(ids instanceof Array)) {
    throw new Error('ids must be array');
  }
  window.localStorage.setItem(LOCAL_LIST_KEY, JSON.stringify(ids));
};

const deleteListId = (id = null, list = getIdList()) => {
  if (id === null) {
    throw new Error('id is required');
  }
  setIdList(list.filter((item) => {
    return parseInt(item, 10) !== parseInt(id, 10);
  }));
};

const listAddItem = (id) => {
  // 读取 localStorage 中的数据
  const list = getIdList();
  list.unshift(id);
  setIdList(list);
  return list;
};

export {
  getList,
  listAddItem,
  deleteListId,
};
