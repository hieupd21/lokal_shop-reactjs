import React from "react";
import PropTypes from "prop-types";
import "./style/item.scss";
import { useHistory } from "react-router";

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductItem({ product }) {
  const history = useHistory();
  const thumbnailURL =
    product.thumbnail != null
      ? `https://api.ezfrontend.com${product.thumbnail.url}`
      : "https://www.elfielondon.com/wp-content/uploads/woocommerce-placeholder.png";

  const handleClickDetail = () => {
    history.push(`products/${product.id}`);
  };

  return (
    <div className="product-wrapper" onClick={handleClickDetail}>
      <div className="product-image">
        <img src={thumbnailURL} alt={product.name} />
      </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">
          {new Intl.NumberFormat("vi-VN").format(product.salePrice)}
          {product.promotionPercent ? (
            <span className="product-promotion">
              {" "}
              - {product.promotionPercent}%
            </span>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
