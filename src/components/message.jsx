import React, { Component } from "react";
import { emojify } from "react-emojione";

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}

// React
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { author, content, createdAt } = this.props;
    return (
      <div className="message">
        <div className="username-time">
          <h5 style={{ color: stringToColour(author) }}>{author}</h5>
          <h5 className="created">{createdAt}</h5>
        </div>
        <h5 className="content-style">{emojify(content)}</h5>
      </div>
    );
  }
}

export default Message;
