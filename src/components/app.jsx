import React from "react";

import ChannelList from "../containers/channel_list";
import MessageList from "../containers/message_list";

const appStyle = {
  display: "flex",
};

const App = () => {
  return (
    <div className="app" style={appStyle}>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
