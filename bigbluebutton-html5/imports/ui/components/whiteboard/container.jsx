import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import WhiteboardService from './service';
import Whiteboard from './component';

class WhiteboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Whiteboard {...this.props}>
        {this.props.children}
      </Whiteboard>
    );
  }
}

export default createContainer(() => {
  const data = WhiteboardService.getWhiteboardData();
  return data;
}, WhiteboardContainer);
