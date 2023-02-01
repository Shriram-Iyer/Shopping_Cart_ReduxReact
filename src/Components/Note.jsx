import React from "react";
import items from "./items";
import Counter from "./Counter";
export default function Note(props) {
  return items.map((noteItem) => (
    <div className="note">
      <br />
      <br />
      <p>Product Name</p>
      <h1>{noteItem.prodName}</h1>
      <br />
      <p>Price</p>
      <h1>₹{noteItem.price}</h1>
      <img src={noteItem.img} alt="" />
      <br />
      <Counter
        key={noteItem.key}
        price={noteItem.price}
        product={noteItem.prodName}
      />
    </div>
  ));
}
