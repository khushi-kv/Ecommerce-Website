import React from "react";
import "./CartPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,

} from "../../store/CartSlice";
import { shopping_cart } from "../../utils/images";

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);
  if (carts.length === 0) {
    return (
      <div className="container">
        <div className=" flex justify-center align-center flex-column font-manrope">
          <img
            src={shopping_cart}
            alt="shopping_cart"
            className="shopping-cart"
          />
          <p className="fw-6 fs-lg text-gray">Your shopping cart is empty.</p>
        <Link to="/" className=" shopping-btn bg-orange text-white fw-5">Go Shopping Now</Link>
        </div>
        
      </div>
    );
  }
  return (
    <>
    
    <div className="cart bg-whitesmoke py-4  text-bold">
      <div className="container">
        <div className="cart-table">
          <div className="cart-content bg-white text-gray ">
            <div className="cart-th">
              <span className="cart-text">S.N</span>
            </div>
            <div className="cart-th">
              <span className="cart-text">Product</span>
            </div>
            <div className="cart-th">
              <span className="cart-text">Unit Price</span>
            </div>
            <div className="cart-th">
              <span className="cart-text">Quantity</span>
            </div>
            <div className="cart-th">
              <span className="cart-text">Total Price</span>
            </div>
            <div className="cart-th">
              <span className="cart-text">Action</span>
            </div>
          </div>

          <div className="cart-body bg-white text-black fw-4">
            {carts.map((cart, idx) => {
              return (
                <div className="cart-content py-5" key={cart?.id}>
                  <div className="cart-data">
                    <span className="cart-text">{idx + 1}</span>
                  </div>
                  <div className="cart-data">
                    <span className="cart-text">{cart?.title}</span>
                  </div>
                  <div className="cart-data">
                    <span className="cart-text ">
                      {formatPrice(cart?.discountedPrice)}
                    </span>
                  </div>

                  <div className="cart-quantity">
                    <div className="quantity-content flex align-center">
                      <button
                        type="button"
                        className="qty-decrease flex align-center justify-center"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))
                        }
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="qty-value flex align-center justify-center">
                        {cart?.quantity}
                      </div>
                      <button
                        type="button"
                        className="qty-increase flex align-center justify-center"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-totalprice">
                    <span className="text-orange fw-6">
                      {formatPrice(cart?.totalPrice)}
                    </span>
                  </div>
                  <button
                    className="btn-text "
                    type="button"
                    onClick={() => dispatch(removeFromCart(cart?.id))}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>

          <div className="cart-footer bg-white py-6 my-3 flex align-center justify-between">
            <button
              className="clear-cart mx-4 fw-5"
              onClick={() => dispatch(clearCart())}
            >
              <i className="fas fa-trash"></i>Clear Cart
            </button>

            <div className="totalitems">
              <div className="items-text flex align-center  justify-end mx-4">
                <span className="text-black fw-5">
                  Total ({itemsCount}) items:
                </span>
                <span className="text-orange fw-6 fs-xl">
                  {formatPrice(totalAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );

};

export default CartPage;
