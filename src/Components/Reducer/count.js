function count(state = 0, action) {
  switch (action.type) {
    case "copy":
      return (state = action.payload);
    default:
      return state;
  }
}
export default count;
