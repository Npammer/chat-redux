export default function selectedChannelReducer(state = null, action) {
  switch (action.type) {
    case "SET_SELECTEDCHANNEL":
      return action.payload;
    default:
      return state;
  }
}
