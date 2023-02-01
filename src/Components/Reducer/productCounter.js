import items from "../items.json";
let initialState = {};
for (let item of items) {
  initialState = { ...initialState, [item.prodName]: 0 };
}
function productCounter(state = initialState, action) {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        [action.payload]: state[action.payload] ? state[action.payload] + 1 : 1
      };
    case "decrease":
      return {
        ...state,
        [action.payload]: state[action.payload] ? state[action.payload] - 1 : 0
      };
    default:
      return state;
  }
}
export default productCounter;
