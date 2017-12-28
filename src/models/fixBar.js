export default {
  namespace: 'fixBar',
  state: {
    selectedTab: ''
  },
  reducers: {
    updateSelectTab(state, { payload: data }) {
      console.log('123123');
      return {
        selectedTab: data
      };
    },
  }
};
