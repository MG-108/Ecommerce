import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">BoatZ Headphones </Link>
      </p>
      {/* open Cart */}
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities} </span>
      </button>

      {/* showCart default is false */}
      {/* showCart true ? show Cart component otherwise null */}
      {showCart ? <Cart /> : null}
    </div>
  );
};

export default Navbar;
