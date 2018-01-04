import merge from 'merge';

import * as listServices from '../services/list';

export default {
  namespace: 'list',
  state: {
    data: [],
    loading: false,
    needRefresh: false,
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
    setNotification(state) {
      return {
        data: state.data.map((item) => {
          const time = item.startTime - new Date().getTime();
          let timer = null;
          if (time > 0) {
            timer = setTimeout(() => {
              /* eslint no-new: 0 */
              new window.Notification(item.title, {
                body: item.content,
                tag: item.id,
                icon: 'https://reactnative.cn/static/docs/0.51/img/react-native-congratulations.png',
              });
            }, time);
          }
          return {
            ...item,
            timer,
          };
        }),
      };
    },
    changeNeedRefresh(state, { payload: needRefresh }) {
      return {
        ...state,
        needRefresh,
      };
    },
  },
  effects: {
    * fetch({ payload }, { call, put }) {
      yield put({
        type: 'setLoading',
        payload: true,
      });
      const listData = yield call(listServices.getList);
      if (payload.clear) {
        yield put({
          type: 'clearData',
        });
      }
      yield put({
        type: 'add',
        payload: listData,
      });
      yield put({
        type: 'setLoading',
        payload: false,
      });
      yield put({
        type: 'setNotification',
      });
    },
  },
};
