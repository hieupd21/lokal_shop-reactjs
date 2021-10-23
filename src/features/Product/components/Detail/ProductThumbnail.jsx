import React from "react";
import PropTypes from "prop-types";

ProductThumbnail.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductThumbnail({ product }) {
  const thumbnailURL =
    product.thumbnail != null
      ? `https://api.ezfrontend.com${product.thumbnail.url}`
      : "https://www.elfielondon.com/wp-content/uploads/woocommerce-placeholder.png";

  return (
    <div className="product-detail-thumbnail">
      <img src={thumbnailURL} alt={product.name} />
    </div>
  );
}

export default ProductThumbnail;
