import React, { useState } from "react";

function Item({ name, category }) {
    const [shoppingCart, setShoppingCart] = useState(false)

    function handleShoppingCart() {
        setShoppingCart(prevMode => !prevMode)
    }

  return (
    <li className={shoppingCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleShoppingCart} className="add">{shoppingCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
