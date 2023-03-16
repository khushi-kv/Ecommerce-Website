import React, { useEffect, useState } from "react";
import "./ProductSinglePage.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncSingleProduct,
  getProductSingle,
  getProductSingleStatus,
} from "../../store/ProductSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import { formatPrice } from "../../utils/helpers";
import { addToCart } from "../../store/CartSlice";

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getProductSingleStatus);
  const [quantity, setQuantity] = useState(1);

  // getting single product
  useEffect(() => {
    dispatch(fetchAsyncSingleProduct(id));
  },[]);

  let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);
  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    alert("Item Added In Cart!");
  };

  return (
    <>
    
      <main className="py-5 bg-whitesmoke">
        <div className="product-single">
          <div className="container">
            <div className="product-single-content bg-white grid">
              <div className="product-single-l">
                <div className="product-img">
                  <div className="product-img-zoom">
                    <img
                      src={
                        product ? (product.images ? product.images[1] : "") : ""
                      }
                      alt=""
                      className="img-cover"
                    />
                  </div>

                  <div className="product-img-thumbs flex align-center my-2">
                    <div className="thumb-item">
                      <img
                        src={
                          product
                            ? product.images
                              ? product.images[0]
                              : ""
                            : ""
                        }
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div className="thumb-item">
                      <img
                        src={
                          product
                            ? product.images
                              ? product.images[2]
                              : ""
                            : ""
                        }
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div className="thumb-item">
                      <img
                        src={
                          product
                            ? product.images
                              ? product.images[3]
                              : ""
                            : ""
                        }
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div className="thumb-item">
                      <img
                        src={
                          product
                            ? product.images
                              ? product.images[4]
                              : ""
                            : ""
                        }
                        alt=""
                        className="img-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-single-r">
                <div className="product-item-info font-manrope py-4">
                  <div className="title fs-xl fw-5 text-start">
                    {product?.title}
                  </div>
                  <div>
                    <p className="para fw-3 py-2 text-start fs-sm py-3 ">
                      {product?.description}
                    </p>
                  </div>
                  <div className="info flex align-center flex-wrap fs-sm">
                    <div className="rating flex align-center">
                      <span className="text-orange fw-8">Rating:</span>
                      <span className="mx-1">{product?.rating}</span>
                    </div>
                    <div className="vert-line"></div>
                    <div className="category flex align-center">
                      <span className="text-orange fw-8">Brand:</span>
                      <span className="mx-1">{product?.brand}</span>
                    </div>
                    <div className="vert-line"></div>
                    <div className="category flex align-center">
                      <span className="text-orange fw-8">Category:</span>
                      <span className="mx-1 text-capitalize">
                        {product?.category
                          ? product.category.replace("-", " ")
                          : ""}
                      </span>
                    </div>
                  </div>

                  <div className="price py-5">
                    <div className="flex align-center">
                      <div className="old-price text-gray">
                        {formatPrice(product?.price)}
                      </div>
                      <span className=" mx-2 text-dark">
                        Inclusive of all taxes
                      </span>
                    </div>

                    <div className="flex align-center my-1">
                      <div className="new-price   font-poppins  fs-xl text-bold text-orange">
                        {formatPrice(discountedPrice)}
                      </div>
                      <div className="discount bg-orange  text-white fw-6 font-poppins mx-3">
                        {product?.discountPercentage}% OFF
                      </div>
                    </div>
                  </div>

                  <div className="quantity flex align-center py-6">
                    <div className="qty-text">Quantity:</div>
                    <div className="qty-change flex align-center mx-3">
                      <button
                        type="button"
                        className="qty-decrease flex align-center justify-center"
                        onClick={() => decreaseQty()}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="quantity-text flex align-center justify-center">
                        {quantity}
                      </div>
                      <button
                        type="button"
                        className="qty-increase flex align-center justify-center"
                        onClick={() => increaseQty()}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    {product?.stock === 0 ? (
                      <div className="qty-error text-uppercase bg-danger text-white ls-1 mx-2 fw-5">
                        out of stock
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="btns text-start">
                    <button type="button" className="CartBtn ">
                      <i className="fas fa-shopping-cart"></i>
                      <span
                        className="btn-text "
                        onClick={() => {
                          addToCartHandler(product);
                        }}
                      >
                        Add To Cart
                      </span>
                    </button>
                    <button type="button" className="buy-now mx-4">
                      <span className="text-white fw-7">Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default ProductSinglePage;
// );
// };