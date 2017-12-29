import merge from 'merge';

import * as listServices from '../services/list';

export default {
  namespace: 'list',
  state: {
    data: [],
    loading: false,
  },
  reducers: {
    clearData(state) {
      return merge.recursive(true, state, {
        data: [],
      });
    },
    add(state, { payload: data }) {
      return merge.recursive(true, state, {
        data: [].concat(state.data, data),
      });
    },
    setLoading(state, { payload: loading }) {
      return merge.recursive(true, state, {
        loading,
      });
    },
  },
  effects: {
    * fetch({ payload }, { call, put }) {
      yield put({
        type: 'setLoading',
        payload: true,
      });
      const listData = yield call(listServices.getList, payload.pageNumber);
      if (payload.clear) {
        yield put({
          type: 'clearData',
        });
      }
      yield put({
        type: 'add',
        payload: listData.content.content,
      });
      yield put({
        type: 'setLoading',
        payload: false,
      });
    },
  },
};
