import React, { Component } from 'react';
import { Icon, List, NavBar, Modal, Popover } from 'antd-mobile';
import { connect } from 'dva';
import { bind } from 'decko';
import moment from 'moment';

const alert = Modal.alert;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      visible: false,
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
  onSelect(opts) {
    if (opts.props.value === 'delete') {
      this.handleVisibleChange(false);
      this.handlerDeleteClick();
    }
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
          this.handlerGoBack();
        },
      },
    ]);
  }

  @bind
  handleVisibleChange(visible) {
    this.setState({
      visible,
    });
  }

  @bind
  handlerGoBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.handlerGoBack}
          rightContent={
            <Popover
              mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Popover.Item value="delete">删除</Popover.Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div
                style={{
                  height: '100%',
                  padding: '0 15px',
                  marginRight: '-15px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
        >详情</NavBar>
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
