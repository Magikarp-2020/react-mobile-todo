import * as detailServices from '../services/detail';

export default {
  namespace: 'detail',
  state: {
    data: {},
    loading: false,
  },
  effects: {
    * fetch({ payload: id }, { call, put }) {
      yield put({
        type: 'setLoading',
        payload: true,
      });
      const detailData = yield call(detailServices.getDetail, id);
      yield put({
        type: 'set',
        payload: detailData,
      });
      yield put({
        type: 'setLoading',
        payload: false,
      });
    },
    * deleteById({ payload: id }, { call, put }) {
      yield call(detailServices.deleteById, id);
      yield put({
        type: 'clear',
      });
    },
  },
  reducers: {
    set(state, { payload: data }) {
      return {
        ...state,
        data,
      };
    },
    setLoading(state, { payload: loading }) {
      return {
        ...state,
        loading,
      };
    },
    clear(state) {
      return {
        ...state,
        data: {},
      };
    },
  },
};
