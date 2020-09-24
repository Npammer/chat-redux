/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Message from "../components/message";
import MessageForm from "./message_form";

import { fetchMessages } from "../actions/actions";

class MessageList extends Component {
  componentWillMount() {
    this.getMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.getMessages(this.props.selectedChannel),
      2000
    );
  }

  componentDidUpdate() {
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getMessages = (channel) => this.props.fetchMessages(channel);

  renderList = () => {
    // eslint-disable-next-line arrow-parens
    return this.props.messages.map((message) => (
      <Message
        author={message.author}
        content={message.content}
        createdAt={message.created_at.match(/\d{2}:\d{2}:\d{2}/)}
        key={message.created_at}
      />
    ));
  };

  render() {
    return (
      <div className="list-style">
        <div
          className="message-list"
          ref={(messageListRef) => {
            this.messageList = messageListRef;
          }}
        >
          {this.renderList()}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    messages: reduxState.messages,
    selectedChannel: reduxState.selectedChannel,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
