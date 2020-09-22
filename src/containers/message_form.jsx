import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createMessage } from "../actions/actions";

const form = {
  margin: "16px 0",
  position: "absolute",
  width: "96%",
  bottom: "0px",
};

const input = {
  width: "80%",
  height: "40px",
};

const button = {
  width: "20%",
  height: "40px",
  backgroundColor: "lightblue",
  borderStyle: "none",
  position: "absolute",
};

class MessageFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      this.state.value
    );
    this.setState({ value: "" });
  }

  render() {
    return (
      <div style={form}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            style={input}
          />
          <input type="submit" value="Send" style={button} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    selectedChannel: reduxState.selectedChannel,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageFrom);
