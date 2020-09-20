export default function currentUserReducer(state = null, action) {
  switch (action.type) {
    case "SET_CURRENTUSER":
      return action.payload;
    default:
      return state;
  }
}
