import React, { Component } from "react";

// CSS
const message = {
  padding: "8px 8px 0px 8px",
};

const firstLine = {
  display: "flex",
};

const created = {
  display: "flex",
  alignItems: "center",
  color: "gray",
  fontSize: "8px",
  margin: "0px",
  marginLeft: "6px",
};

const contentStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  padding: "8px",
  backgroundColor: "lightblue",
  width: "auto",
  borderRadius: "14px",
  display: "table",
};

// React
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { author, content, createdAt } = this.props;
    return (
      <div style={message}>
        <div style={firstLine}>
          <h5>{author}</h5>
          <h5 style={created}>{createdAt}</h5>
        </div>
        <h5 style={contentStyle}>{content}</h5>
      </div>
    );
  }
}

export default Message;
