import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import "./Product.scss";
import "../../App.scss";
const Product = ({ product }) => {
  // console.log(product);
  return (
    <>
      <Link to={`/product/${product?.id}`} key={product?.id}>
        <div className="product-item">
          <div className="category">{product?.category}</div>
          <div className="product-item-img">
            <img
              className="img-cover"
              src={product?.images[0]}
              alt={product.title}
            />
          </div>
          <div className="product-item-info">
            <div className="brand text-center">
              <span>Brand:</span>
              <span className="fs-sm  fw-9">{product?.brand}</span>
            </div>
            <div className="title flex justify-center fs-lg fw-5">{product?.title}</div>
            <div className="product-price flex align-center justify-center">
              <span className="old-price fs-base">
                {formatPrice(product?.price)}
              </span>
              <span className="new-price mx-2 text-bold">
                {formatPrice(product?.discountedPrice)}
              </span>
              <span className="discount text-danger text-bold ">
                ({product?.discountedPercentage}%OFF)
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;



