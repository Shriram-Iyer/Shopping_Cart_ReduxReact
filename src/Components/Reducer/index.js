import countreducer from "./count";
import subtotalreducer from "./subtotal";
import totalreducer from "./total";
import numreducer from "./num";
import productCounter from "./productCounter";
import { combineReducers } from "redux";
// import undoable from "redux-undo";

const allreducer = combineReducers({
  count: countreducer,
  subtotal: subtotalreducer,
  total: totalreducer,
  num: numreducer,
  productCounter: productCounter
});
export default allreducer;
