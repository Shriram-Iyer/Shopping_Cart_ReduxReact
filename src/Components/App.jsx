import React from "react";
import Header from "./Header";
import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import { setCount, setTotal } from "./Actions";
// import { ActionCreators } from "redux-undo";

function App() {
  const count = useSelector((state) => state.count);
  const total = useSelector((state) => state.total);
  const subtotal = useSelector((state) => state.subtotal);
  const num = useSelector((state) => state.num);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div className="fullpage">
        <div className="page">
          <Note />
        </div>
      </div>
      <br />
      <br />
      <div>
        <footer>
          <div className="center">
            <button
              id="addproduct"
              onClick={() => {
                dispatch(setCount(num));
                dispatch(setTotal(subtotal));
              }}
            >
              Add Products
            </button>
            {/* <button onClick={() => dispatch(undo())}>undo</button> */}
          </div>
          <p>
            {Number(count) === 1
              ? Number(count) + " Product Selected"
              : Number(count) + " Products Selected"}{" "}
            <div className="divider">|</div> <span id="span">Total Price</span>{" "}
            ₹<>{total}</>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
