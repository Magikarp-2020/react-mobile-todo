import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { connect } from 'dva';
import { bind } from 'decko';

import style from './style.less';

class FixBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  @bind
  handlerTabBarItemClick(item) {
    this.props.dispatch({
      type: 'fixBar/updateSelectTab',
      payload: item
    });
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.body}>
          {this.props.children}
        </div>
        <div className={style.footer}>
          <TabBar
            className={style.tabBar}
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            <TabBar.Item
              title="Life"
              key="Life"
              selected={this.props.fixBar.selectedTab === 'blueTab'}
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              onPress={() => {
                this.handlerTabBarItemClick('blueTab');
              }}
              data-seed="logId"
            >
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fixBar: state['fixBar']
  };
};

export default connect(mapStateToProps)(FixBar);
