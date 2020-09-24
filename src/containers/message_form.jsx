import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createMessage } from "../actions/actions";

class MessageFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.messageInput.focus();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length > 0) {
      this.props.createMessage(
        this.props.selectedChannel,
        this.props.currentUser,
        this.state.value
      );
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="input"
            ref={(element) => {
              this.messageInput = element;
            }}
          />
          <input type="submit" value="Send" className="message-form-button" />
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
