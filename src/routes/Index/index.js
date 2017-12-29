import React, { Component } from 'react';
import { List, PullToRefresh } from 'antd-mobile';
import { connect } from 'dva';

import FixBar from '../../components/FixBar/index';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      refreshing: false,
      // 浏览器高度 - 50 footer
      height: document.documentElement.clientHeight - 50,
    };
  }

  componentWillMount() {
    if (!this.props.list.data.length) {
      this.fetchData({});
    }
  }

  /**
   *
   * @param clear Boolean
   * @param pageNumber
   */
  fetchData({ clear = false, pageNumber = 1 }) {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        pageNumber,
        clear,
      },
    });
  }

  render() {
    return (
      <FixBar history={this.props.history}>
        <PullToRefresh
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          distanceToRefresh="100"
          refreshing={this.props.list.loading}
          onRefresh={() => {
            this.fetchData({
              clear: true,
            });
          }}
        >
          <List>
            {this.props.list.data.map((item, index) => {
              return (
                <List.Item
                  arrow="horizontal"
                  multipleLine
                  onClick={() => {}}
                  key={index}
                >{item.title}<List.Item.Brief>{item.content}</List.Item.Brief>
                </List.Item>
              );
            })}
          </List>
        </PullToRefresh>
      </FixBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps)(Index);
