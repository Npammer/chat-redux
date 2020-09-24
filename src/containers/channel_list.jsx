/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchMessages, selectChannel } from "../actions/actions";

const active = {
  fontWeight: "bold",
};

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  };

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        onClick={() => this.handleClick(channel)}
        role="presentation"
        className="li"
        style={channel === this.props.selectedChannel ? active : null}
      >
        # {channel === "paris" ? "oslo" : channel}
      </li>
    );
  };

  render() {
    return (
      <div className="channels-container">
        <span className="channel-title">Redux Chat</span>
        <ul>{this.props.channels.map(this.renderChannel)}</ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages, selectChannel }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
