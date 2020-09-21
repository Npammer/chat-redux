// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// internal modules
import App from "./components/app";
import "../assets/stylesheets/application.scss";

// Reducers
import channelsReducer from "./reducers/channels_reducer";
import currentUserReducer from "./reducers/current_user_reducer";
import messagesReducer from "./reducers/messages_reducer";
import selectedChannelReducer from "./reducers/selected_channel_reducer";

import messages from "../data/messages";

// State and reducers
const initialState = {
  messages,
  channels: ["general", "react", "paris"],
  currentUser:
    prompt("What is your username?") ||
    `anonymous${Math.floor(10 + Math.random() * 90)}`,
  selectedChannel: "general",
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer,
});

const middlewares = applyMiddleware(logger, reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
