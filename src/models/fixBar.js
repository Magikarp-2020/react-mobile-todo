export default {
  namespace: 'fixBar',
  state: {
    selectedTab: '',
  },
  reducers: {
    updateSelectTab(state, { payload: data }) {
      return {
        selectedTab: data,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        switch (pathname) {
          case '/':
            dispatch({
              type: 'updateSelectTab',
              payload: 'list',
            });
            break;
          case '/new':
            dispatch({
              type: 'updateSelectTab',
              payload: 'new',
            });
            break;
          case '/my':
            dispatch({
              type: 'updateSelectTab',
              payload: 'my',
            });
            break;
          default :
            break;
        }
      });
    },
  },
};
