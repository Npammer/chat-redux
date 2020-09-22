import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Message from "../components/message";
import MessageForm from "./message_form";

import { fetchMessages } from "../actions/actions";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.fetchMessages("general");
  }

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
      <div className="message-list">
        {this.renderList()}
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
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
