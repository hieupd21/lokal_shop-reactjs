import React from "react";
import PropTypes from "prop-types";

DetailRela.propTypes = {
  products: PropTypes.object.isRequired,
};

function DetailRela({ product }) {
  const thumbnailURL =
    product.thumbnail != null
      ? `https://api.ezfrontend.com${product.thumbnail.url}`
      : "https://www.elfielondon.com/wp-content/uploads/woocommerce-placeholder.png";

  return (
    <div className="rela-wrapper">
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
