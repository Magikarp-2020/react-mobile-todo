import React, { Component } from 'react';
import { Drawer, Icon, List, NavBar, Modal } from 'antd-mobile';
import { connect } from 'dva';
import { bind } from 'decko';
import moment from 'moment';

import style from './style.less';

const alert = Modal.alert;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch({
      type: 'detail/fetch',
      payload: id,
    });
  }

  @bind
  changeOpenStatus(open) {
    this.setState({
      open,
    });
  }

  @bind
  handlerDeleteClick() {
    alert('确定要删除吗', <div>删除后数据不可恢复</div>, [
      {
        text: '取消',
        onPress: () => {
          this.changeOpenStatus(false);
        },
      }, {
        text: '确定',
        onPress: () => {
          this.changeOpenStatus(false);
        },
      },
    ]);
  }

  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.changeOpenStatus(true);
          }}
          rightContent={[
            <Icon
              onClick={() => {
                this.changeOpenStatus(true);
              }}
              key="1"
              type="ellipsis"
            />,
          ]}
        >详情</NavBar>
        <Drawer
          className={style.drawer}
          style={{ minHeight: document.documentElement.clientHeight - 45 }}
          enableDragHandle
          sidebarStyle={{ background: '#ffffff' }}
          position="right"
          sidebar={
            <List className={style.drawerList}>
              <List.Item onClick={this.handlerDeleteClick}>删除</List.Item>
            </List>
          }
          open={this.state.open}
          onOpenChange={this.changeOpenStatus}
        >
          <List renderHeader={this.props.newForm.modules.info}>
            <List.Item
              extra={this.props.detail.data.title}
            >
              {this.props.newForm.title.label}
            </List.Item>
            <List.Item
              extra={this.props.detail.data.content}
            >
              {this.props.newForm.content.label}
            </List.Item>
          </List>
          <List renderHeader={this.props.newForm.modules.time}>
            <List.Item
              extra={this.props.detail.data.startTime ? moment(+this.props.detail.data.startTime).format('YYYY-MM-DD HH:mm:ss') : ''}
            >
              {this.props.newForm.startTime.label}
            </List.Item>
            <List.Item
              extra={this.props.detail.data.endTime ? moment(+this.props.detail.data.endTime).format('YYYY-MM-DD HH:mm:ss') : ''}
            >
              {this.props.newForm.endTime.label}
            </List.Item>
          </List>
          <List renderHeader={this.props.newForm.modules.remind}>
            <List.Item
              extra={this.props.detail.data.push ? '是' : '否'}
            >
              {this.props.newForm.push.label}
            </List.Item>
          </List>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newForm: state.new,
    detail: state.detail,
  };
};

export default connect(mapStateToProps)(Detail);
