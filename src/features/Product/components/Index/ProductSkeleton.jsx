import Skeleton from "@material-ui/lab/Skeleton";
import PropTypes from "prop-types";
import React from "react";

ProductSkeleton.propTypes = {
  length: PropTypes.number,
};

function ProductSkeleton({ length = 20 }) {
  return (
    <div className="row product-list">
      {Array.from(new Array(length)).map((x, idx) => (
        <div className="col product-item p-3 t-4 m-12" key={idx}>
          <div className="product-wrapper">
            <div className="product-image">
              <Skeleton variant="rect" width="100%" height={120} />
            </div>
            <div className="product-info">
              <Skeleton height={40} />
              <p className="product-price">
                <Skeleton height={35} width="60%" />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSkeleton;
