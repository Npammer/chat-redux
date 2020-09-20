export default function channelsReducer(state = null, action) {
  switch (action.type) {
    case "SET_CHANNELS":
      return action.payload;
    default:
      return state;
  }
}
