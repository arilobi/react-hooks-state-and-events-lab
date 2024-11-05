import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(prevState => !prevState);
  }

  const itemClass = inCart ? 'In cart' : '';
  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}>
        {inCart ? 'Add to cart' : 'Remove from cart'}</button>
    </li>

  );
}

export default Item;
