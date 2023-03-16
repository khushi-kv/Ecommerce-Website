import React from "react";
import { formatPrice } from "../../utils/helpers";
import "./CartModal.scss";
const CartModal = ({ carts }) => {
  return (
    <div className="cart-modal">
      <h1 className="text-black fs-sm text-center fw-5 ">
        Recently Added Items
      </h1>
      {carts.length > 0 ? (
        <div className="cart-modal-list">
          {carts.map((cart, idx) => {
            return (
              <div
                className="cart-modal-item  grid  align-center font-manrope py-2"
                key={idx}
              >
                <div className="cart-img">
                  <img
                    src={cart?.thumbnail}
                    alt="thumbnail"
                    className="modal-img"
                  />
                </div>
                <div className="cart-modal-item-title fs-xs font-manrope text-capitalize  text-center text-black">
                  {cart?.title}
                </div>
                <div className="cart-modal-item-price text-orange fs-sm fw-7">
                  {formatPrice(cart?.discountedPrice)}
                </div>
              </div>
            );
          })}

          <div className="view-shopping-cart">View My Shopping Cart</div>
        </div>
      ) : (
        <div className="text-orange flex align-center justify-center py-6 fw-9">No Products Yet</div>
      )}
    </div>
  );
};

export default CartModal;
