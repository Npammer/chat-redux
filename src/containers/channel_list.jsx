/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchMessages } from "../actions/actions";

class ChannelList extends Component {
  renderList = () => {
    // eslint-disable-next-line arrow-parens
    return this.props.channels.map((channel) => (
      <h3 key={channel}>#{channel}</h3>
    ));
  };

  render() {
    return (
      <div className="channel">
        <h3>Redux Chat</h3>
        <div className="channel-list">{this.renderList()}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
