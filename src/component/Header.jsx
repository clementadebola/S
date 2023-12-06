import React, { useState } from "react";
import "../Styles/header.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../Assets/logo.svg";
import cartIcon from "../Assets/icon-cart.svg";
import userProfileImg from "../Assets/image-avatar.png";
import deleteIcon from "../Assets/icon-delete.svg";
import product8 from "../Assets/image-product-4-thumbnail.jpg";
import { useCart } from "../index";

function Header() {
  const { cartState: state } = useCart();
  const [cartVisible, setCartVisible] = useState(false);
  const { dispatch } = useCart();
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  const removeFromCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id: item.id,
        name:item.name,
        image: item.image,
      },
    });
  };

  return (
    <>
      <header>
        <div className="logo-cont">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="cart-cont">
          <div className="cartItemWrapper">
            <img onClick={toggleCart} id="cartIcon" src={cartIcon} alt="cart" />
            <span className="cartItemCount">{state.cartItems?.length}</span>
          </div>

          <img id="user-profile" src={userProfileImg} alt="user-profile" />
        </div>
        {cartVisible && (
          <div className="cartItemList">
            <h5>Cart</h5>
            <span className="hr"></span>
            <div
              className="cartlist-wrapper"
              style={{ height: state.cartItems.length > 0 ? "100px" : "50px" }}
            >
              {state.cartItems.length > 0 ? (
                state.cartItems.map((item, i) => (
                  <CartItem
                    key={i}
                    name={item.name}
                    img={item.image}
                    price={item.price}
                    id={i}
                    count={item.count}
                    handleItemRemove={removeFromCart}
                  />
                ))
              ) : (
                <>
                  <p>Cart is empty😥</p>
                </>
              )}
            </div>
            {state.cartItems.length > 0 && (
              <button className="check-out-btn">checkout</button>
            )}
          </div>
        )}
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default Header;

const CartItem = ({ name, img, price, count, id, handleItemRemove }) => {
 
  return (
    <>
      <div className="cartItemCont">
        <img className="item-img" src={img} alt="img" />
        <div className="item-meta-detail">
          <span className="item-name">{name}</span>
          <div>
            <span className="price">{`${price} * ${count}`}</span>{" "}
            <span className="total-price">${+price * +count}</span>
          </div>
        </div>
        <img
          onClick={()=>handleItemRemove({id, name, img})}
          className="deleteIcon"
          src={deleteIcon}
          alt=""
        />
      </div>
    </>
  );
};
