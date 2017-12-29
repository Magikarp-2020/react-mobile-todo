import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { connect } from 'dva';
import { bind } from 'decko';

import style from './style.less';

class FixBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  componentDidMount() {
  }

  @bind
  handlerTabBarItemClick(item) {
    switch (item) {
      case 'list':
        this.props.history.push('/');
        break;
      case 'new':
        this.props.history.push('/new');
        break;
      case 'my':
        this.props.history.push('/my');
        break;
      default:
        throw new Error('no case');
    }
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
              title="新增"
              key="New"
              selected={this.props.fixBar.selectedTab === 'new'}
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                  }}
                  className="iconfont icon-write"
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                  }}
                  className="iconfont icon-writefill"
                />
              }
              onPress={() => {
                this.handlerTabBarItemClick('new');
              }}
            />
            <TabBar.Item
              title="列表"
              key="List"
              selected={this.props.fixBar.selectedTab === 'list'}
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                  }}
                  className="iconfont icon-form_light"
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                  }}
                  className="iconfont icon-form_fill_light"
                />
              }
              onPress={() => {
                this.handlerTabBarItemClick('list');
              }}
            />
            <TabBar.Item
              title="我的"
              key="My"
              selected={this.props.fixBar.selectedTab === 'my'}
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                  }}
                  className="iconfont icon-people"
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                  }}
                  className="iconfont icon-peoplefill"
                />
              }
              onPress={() => {
                this.handlerTabBarItemClick('my');
              }}
            />
          </TabBar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fixBar: state.fixBar,
  };
};

export default connect(mapStateToProps)(FixBar);
