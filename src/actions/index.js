/* eslint-disable arrow-parens */
// TODO: add and export your own actions

function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then((response) => response.json())
    .then((response) => response.messages);

  return {
    type: "SET_MESSAGES",
    payload: promise,
  };
}

export default fetchMessages;
