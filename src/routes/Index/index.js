import React, { Component } from 'react';
import FixBar from '../../components/FixBar/index';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <FixBar history={this.props.history}>
        sadfhasdflkajsdf
      </FixBar>
    );
  }
}

export default Index;
