import React, { Component } from 'react';
import { connect } from 'dva';
import { bind } from 'decko';
import { Button, DatePicker, InputItem, List, Switch, TextareaItem, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

import * as newFormServices from '../../services/newForm';
import FixBar from '../../components/FixBar/index';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      value: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'new/init',
    });
  }

  @bind
  onErrorClick(e) {
    this.hasError = e;
  }

  @bind
  handlerSubmit() {
    newFormServices.submitNewForm(this.props.newForm);
    this.props.dispatch({
      type: 'list/changeNeedRefresh',
      payload: true,
    });
    Toast.success('提交成功', 1);
    this.props.history.push('/');
  }

  render() {
    return (
      <FixBar history={this.props.history}>
        <List renderHeader={this.props.newForm.modules.info}>
          <InputItem
            placeholder={this.props.newForm.title.placeholder}
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={(value) => {
              this.props.dispatch({
                type: 'new/updateForm',
                payload: {
                  title: {
                    value,
                  },
                },
              });
            }}
            value={this.props.newForm.title.value}
          >
            {this.props.newForm.title.label}
          </InputItem>
          <TextareaItem
            title={this.props.newForm.content.label}
            placeholder={this.props.newForm.content.placeholder}
            value={this.props.newForm.content.value}
            onChange={(value) => {
              this.props.dispatch({
                type: 'new/updateForm',
                payload: {
                  content: {
                    value,
                  },
                },
              });
            }}
            rows="3"
          />
        </List>
        <List renderHeader={this.props.newForm.modules.time}>
          <DatePicker
            maxData={new Date('2018/1/1')}
            value={this.props.newForm.startTime.value}
            onChange={(value) => {
              this.props.dispatch({
                type: 'new/updateForm',
                payload: {
                  startTime: {
                    value,
                  },
                },
              });
            }}
          >
            <List.Item arrow="horizontal">开始时间</List.Item>
          </DatePicker>
          <DatePicker
            value={this.props.newForm.endTime.value}
          >
            <List.Item arrow="horizontal">结束时间</List.Item>
          </DatePicker>
        </List>
        <List renderHeader={this.props.newForm.modules.remind}>
          <List.Item
            extra={<Switch
              checked={this.props.newForm.push.value}
              color="rgb(51, 163, 244)"
              onClick={(checked) => {
                this.props.dispatch({
                  type: 'new/updateForm',
                  payload: {
                    push: {
                      value: checked,
                    },
                  },
                });
              }}
            />}
          >
            {this.props.newForm.push.label}
          </List.Item>
        </List>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="primary" onClick={this.handlerSubmit}>提交</Button>
        </WingBlank>
      </FixBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newForm: state.new,
  };
};

export default connect(mapStateToProps)(New);
