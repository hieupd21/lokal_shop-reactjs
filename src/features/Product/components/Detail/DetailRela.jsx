import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

DetailRela.propTypes = {
  product: PropTypes.object.isRequired,
};

function DetailRela({ product }) {
  const history = useHistory();

  const handleClickDetail = () => {
    const old_history = history.location.pathname;
    const new_history = old_history.replace(
      history.location.pathname,
      product.id
    );
    history.push(new_history);
  };

  const thumbnailURL =
    product.thumbnail != null
      ? `https://api.ezfrontend.com${product.thumbnail.url}`
      : "https://www.elfielondon.com/wp-content/uploads/woocommerce-placeholder.png";

  return (
    <div className="rela-wrapper" onClick={handleClickDetail}>
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

export default DetailRela;
