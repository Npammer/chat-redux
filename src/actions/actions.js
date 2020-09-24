/* eslint-disable arrow-parens */
const BASE_URL = "https://wagon-chat.herokuapp.com/";

function fetchMessages(channel) {
  const promise = fetch(`${BASE_URL}${channel}/messages`)
    .then((response) => response.json())
    .then((response) => response.messages);

  return {
    type: "SET_MESSAGES",
    payload: promise,
  };
}

function createMessage(channel, author, content) {
  const message = {
    author,
    content,
    created_at: new Date().toISOString(),
  };

  fetch(`${BASE_URL}${channel}/messages`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  }).then((r) => r.json());

  return {
    type: "POST_MESSAGE",
    payload: message,
  };
}

function selectChannel(channel) {
  return {
    type: "SET_CHANNEL",
    payload: channel,
  };
}

export { fetchMessages, createMessage, selectChannel };
