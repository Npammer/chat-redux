import React from "react";

import ChannelList from "../containers/channel_list";
import MessageList from "../containers/message_list";

const App = () => {
  return (
    <div className="flex app">
      <div className="logo-container">
        <img
          className="messaging-logo"
          src="https://iili.io/27snHX.png"
          alt="logo"
        />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
