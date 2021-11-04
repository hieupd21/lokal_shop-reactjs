import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { removeFromCart } from "./redux/cartSlice";
import "./style/detail.scss";

const DownButton = (props) => (
  <a {...props}>
    <FaChevronDown className="down" />
  </a>
);

CartDetail.propTypes = {
  item: PropTypes.object,
};

function CartDetail({ item }) {
  const selectArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveItem = (id) => {
    const i = removeFromCart({
      id,
    });
    dispatch(i);
  };

  const handleClickDetail = () => {
    const old_history = history.location.pathname;
    const new_history = old_history.replace(
      history.location.pathname,
      `products/${item.id}`
    );
    history.push(new_history);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-thumbnail" onClick={handleClickDetail}>
        <img
          src={
            item.product.thumbnail != null
              ? `https://api.ezfrontend.com${item.product.thumbnail.url}`
              : "https://www.elfielondon.com/wp-content/uploads/woocommerce-placeholder.png"
          }
          alt=""
        />
      </div>
      <div className="cart-item-info">
        <p className="name" onClick={handleClickDetail}>
          {item.product.name}
        </p>
        <p className="status">Mặt hàng có sẵn mới nhất</p>
        <div className="select">
          <p className="select-quantity" onClick={() => setDropdown(!dropdown)}>
            {item.quantity}
            <DownButton />
          </p>
          {dropdown && (
            <div className="select-dropdown">
              {selectArr.map((x, idx) => (
                <p
                  className="select-dropdown-item"
                  key={idx}
                  onClick={() => setDropdown(!dropdown)}
                >
                  {x}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="remove">
          <p onClick={() => handleRemoveItem(item.id)}>Xoá sản phẩm</p>
        </div>
      </div>
      <div className="cart-item-price">
        <p>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item.quantity * item.product.salePrice)}
        </p>
      </div>
    </div>
  );
}

export default CartDetail;
