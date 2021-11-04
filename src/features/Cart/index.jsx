import React from "react";
import { useSelector } from "react-redux";
import CartDetail from "./CartDetail";
import CartEmpty from "./CartEmpty";
import {
  cartInfoSelector,
  cartTotalSelector,
  cartItemsCountSelector,
} from "./redux/selector";
import "./style/index.scss";

function CartFeature() {
  const cartInfo = useSelector(cartInfoSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const cartCount = useSelector(cartItemsCountSelector);
  const totalPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(cartTotal);

  return (
    <div className="cart-feature">
      <div className="container wide">
        <div className="row">
          <div className="col p-12 t-12 m-12 cart-header">
            <p className="cart-header-title">Giỏ hàng của bạn nè</p>
          </div>
          <div className="col p-8 t-6 m-12 cart-list">
            {cartInfo.length > 0 ? (
              cartInfo.map((item) => (
                <div className="cart-wrapper" key={item.id}>
                  <CartDetail item={item} />
                </div>
              ))
            ) : (
              <CartEmpty />
            )}
          </div>
          <div className="col p-4 t-6 m-12 cart-summary">
            <div className="summary-wrapper">
              <p className="summary-wrapper-title">Tóm tắt đơn hàng</p>
              <div className="summary-wrapper-subtotal">
                <p className="summary-wrapper-subtotal-title">
                  {cartCount} sản phẩm
                </p>
                <div className="summary-wrapper-subtotal-price">
                  {cartCount > 0 && totalPrice}
                </div>
              </div>
              <div className="summary-wrapper-ship">
                <div className="summary-wrapper-ship-title">Vận chuyển</div>
                <p className="summary-wrapper-ship-price">
                  {cartCount > 0 && "Miễn phí"}
                </p>
              </div>
              <div className="summary-wrapper-total">
                <div className="summary-wrapper-total-title">Tổng tiền</div>
                <div className="summary-wrapper-total-price">
                  {cartCount > 0 && totalPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartFeature;
