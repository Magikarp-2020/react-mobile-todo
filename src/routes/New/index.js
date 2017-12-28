import React, { Component } from 'react';
import FixBar from '../../components/FixBar/index';
import { DatePicker, InputItem, List, TextareaItem } from 'antd-mobile';
import { bind } from 'decko';
import { connect } from 'dva';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      value: ''
    };
  }

  @bind
  onChange() {

  }

  @bind
  onErrorClick() {

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
                    value
                  }
                }
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
                    value
                  }
                }
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
                    value: value
                  }
                }
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
      </FixBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newForm: state['new']
  };
};

export default connect(mapStateToProps)(New);
