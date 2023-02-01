import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, subadd, subsub, increase, decrease } from "./Actions";

export default function Counter(props) {
  const dispatch = useDispatch();
  const productCounter = useSelector((state) => state.productCounter);

  function minus() {
    if (Number(productCounter[props.product]) > 0) {
      dispatch(decrease(props.product));
      dispatch(dec());
      dispatch(subsub(props.price));
    }
  }
  function plus() {
    dispatch(increase(props.product));
    dispatch(subadd(props.price));
    dispatch(inc());
  }

  return (
    <>
      <div className="counter">
        <button id="minus" type="button" onClick={minus}>
          <RemoveIcon />
        </button>
        <span>{productCounter[props.product]}</span>
        <button id="plus" type="button" onClick={plus}>
          <AddIcon />
        </button>
      </div>
    </>
  );
}
