import React, { useState } from "react";
import "../Styles/hero.css";
import student from "../Assets/stdent.png";
import Product1 from "../Assets/image-product-1.jpg";
import product2 from "../Assets/image-product-2.jpg";
import product3 from "../Assets/image-product-3.jpg";
import product4 from "../Assets/image-product-4.jpg";

import product5 from "../Assets/image-product-1-thumbnail.jpg";
import product6 from "../Assets/image-product-2-thumbnail.jpg";
import product7 from "../Assets/image-product-3-thumbnail.jpg";
import product8 from "../Assets/image-product-4-thumbnail.jpg";
import cart from "../Assets/icon-cart.svg";
import { useCart } from "..";

const carouselImages = [product5, product6, product7, product8];
function Hero() {
  const [currentImage, setCurrentImage] = useState(Product1);
  const [activeCarouselItem, setActiveCarouselItems] = useState(product5);
  const [counter, setCount] = useState(0);

  const {  cartState: state, dispatch } = useCart();
const shoeBrand = ['Nike','Fila','Fendi','Puma','Prada','Gucci']
  const increseCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: counter,
        name: shoeBrand[Math.floor(Math.random()* shoeBrand.length)],
        image: activeCarouselItem,
        price: Math.floor((Math.random()*999)+1000).toString(),
       count: Math.floor((Math.random()*9)+1).toString(),
      },
    });
  };
  const decreaseCount = () => {
    setCount((prev) => {
      if (counter < 1) {
        setCount(0);
      }
      return (prev -= 1);
    });
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id: counter,
        name: activeCarouselItem,
        image: activeCarouselItem,
      },
    });
  };

  return (
    <>
      <div className="product-cont">
        <div className="banner">
          <div className="banner-img">
            <img src={currentImage} />
          </div>
          <div className="carousel">
            {carouselImages?.map((img, i) => (
              <img
                className={
                  activeCarouselItem === img ? "active-carousel-item" : ""
                }
                src={img}
                key={i}
                onClick={() => {
                  setCurrentImage(img);
                  setActiveCarouselItems(img);
                }}
              />
            ))}
          </div>
        </div>
        <div className="aside">
          <div className="aside-text">
            <h2>SNEAKER COMPANY</h2>
            <h1>Fall limited Edition Sneakers</h1>
          </div>
          <div className="aside-p">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              minima ullam sapiente nulla praesentium earum consectetur quisquam
              excepturi doloremque perspiciatis totam labore nostrum .
            </p>
          </div>
          <div className="price-tags-cont">
            <p className="price-tag">
              {" "}
              <span>$125.00</span>
            </p>
          </div>

          <div className="aside-btns">
            <div className="button">
              <button className="btn-1" onClick={decreaseCount}>
                -
              </button>
              <span className="product-count">{state.cartItems.length}</span>
              <button className="btn-1" onClick={increseCount}>
                +
              </button>
            </div>
            <div className="cart-btn">
              <button className="addCart-btn">
                {" "}
                <img src={cart} alt="add cart" /> <span> Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
