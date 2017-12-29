import React, { Component } from 'react';
import { Card } from 'antd-mobile';

import FixBar from '../../components/FixBar/index';
import style from './style.less';
import face from '../../assets/face.jpg';

class My extends Component {
  render() {
    return (
      <FixBar history={this.props.history}>
        <Card>
          <Card.Header
            className={style.myInfo}
            title="李大超"
            thumb={face}
          />
          <Card.Body>
            <div>我是李大超 李大超是我</div>
          </Card.Body>
          <Card.Footer content="点赞" extra={<div>踩</div>} />
        </Card>
      </FixBar>
    );
  }
}

export default My;
