import React, { Component } from 'react';
import { bind } from 'decko';
import FixBar from '../../components/FixBar/index';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false
    };
  }

  @bind
  handleNavClick() {

  }

  render() {
    return (
      <FixBar>
        sadfhasdflkajsdf
      </FixBar>
    );
  }
}

export default Index;
