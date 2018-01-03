import React, { Component } from 'react';
import { List, PullToRefresh } from 'antd-mobile';
import { connect } from 'dva';
import { bind } from 'decko';

import FixBar from '../../components/FixBar/index';

const Notification = window.Notification;

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
    this.notificationInit();
  }

  @bind
  setNotification() {
    //
    this.props.dispatch({
      type: 'list/setNotification',
    });
  }

  @bind
  notificationInit() {
    // 先检查浏览器是否支持
    if (!('Notification' in window)) {
      // console.log('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      this.setNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission((permission) => {
        // 如果用户同意，就可以向他们发送通知
        if (permission === 'granted') {
          this.setNotification();
        }
      });
    }
    // 最后，如果用户已经授权了相关通知
    // 你出于尊重，就不需要再打扰他们了
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

  @bind
  handlerItemClick(id) {
    this.props.history.push(`/detail/${id}`);
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
                  onClick={() => {
                    this.handlerItemClick(item.id);
                  }}
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
