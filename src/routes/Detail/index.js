import React, { Component } from 'react';
import { connect } from 'dva';

class Detail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch({
      type: 'detail/fetch',
      payload: id,
    });
  }

  render() {
    return (
      <div>detail</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};

export default connect(mapStateToProps)(Detail);
