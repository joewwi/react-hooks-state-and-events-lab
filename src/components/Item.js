import React,{ useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("")
  const cartClass = cart ? "in-cart" : ""
  function handleCart(e){
    setCart(() => !cart)
  }



  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cart ? "Remove to Cart":"Add from Cart"}</button>
    </li>
  );
}

export default Item;
 