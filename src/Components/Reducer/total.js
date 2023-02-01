function total(state = 0, action) {
  switch (action.type) {
    case "copytotal":
      return (state = action.payload);
    default:
      return state;
  }
}
export default total;
