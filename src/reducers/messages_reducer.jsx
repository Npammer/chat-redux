export default function messagesReducer(state = null, action) {
  switch (action.type) {
    case "SET_MESSAGES": {
      return action.payload;
    }
    case "POST_MESSAGE": {
      let newstate = state.slice(0);
      newstate.push(action.payload);
      return newstate;
    }
    default:
      return state;
  }
}
