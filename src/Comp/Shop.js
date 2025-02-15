import "./Shop.css";
import img1 from "./IMG-9153.jpg";
import img2 from "./IMG-9264.jpg";
import cartH from "./cartHollow.png";
import cartF from "./cartFilled.png";
import heartH from "./heart.png";
import heartF from "./heart (1).png";
import { useState } from "react";
function Shop() {
  return (
    <div className="ShopContainer">
      <div className="ShopRow1">
        <button className="categoryBtn">Wear</button>
        <button className="categoryBtn">Walk</button>
        <button className="categoryBtn activeBtn">Play</button>
        <button className="categoryBtn">Sleep</button>
        <button className="categoryBtn">Preserve</button>
      </div>
      <div className="ProductCardRow">
        <div className="ProductCard">
          <div className="imgCont">
            <div className="overlayProdCard">
              <div className="smallImgCartCont">
                <img
                  src={cartH}
                  alt="Cart Icon"
                  onMouseOver={(e) => {
                    e.currentTarget.src = cartF;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.src = cartH;
                  }}
                  className="smallBtn"
                />
              </div>
              <div className="smallImgHeartCont">
                <img
                  src={heartH}
                  alt="Cart Icon"
                  onMouseOver={(e) => {
                    e.currentTarget.src = heartF;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.src = heartH;
                  }}
                  className="smallBtn"
                />
              </div>
            </div>

            <img src={img1} className="productImg" alt="Product" />
          </div>

          <p className="productName">Honey Bee Crochet Toy</p>
          <p className="productPrice">₹ 250</p>
        </div>
        <div className="ProductCard">
          <div className="imgCont">
            <div className="overlayProdCard">
              <div className="smallImgCartCont">
                <img
                  src={cartH}
                  alt="Cart Icon"
                  onMouseOver={(e) => {
                    e.currentTarget.src = cartF;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.src = cartH;
                  }}
                  className="smallBtn"
                />
              </div>
              <div className="smallImgHeartCont">
                <img
                  src={heartH}
                  alt="Cart Icon"
                  onMouseOver={(e) => {
                    e.currentTarget.src = heartF;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.src = heartH;
                  }}
                  className="smallBtn"
                />
              </div>
            </div>

            <img src={img2} className="productImg" alt="Product" />
          </div>

          <p className="productName">Soft Bone Crochet Toy</p>
          <p className="productPrice">₹ 250</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
