import React from "react";
import PropTypes from "prop-types";
import "./style/detail.scss";
import DetailForm from "../../../form/DetailForm";
import dateFormat from "dateformat";

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductInfo({ product }) {
  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="product-detail-info">
      <p className="product-detail-name">{product.name}</p>

      {product.promotionPercent !== 0 ? (
        <div className="product-detail-price-sale">
          <p className="sale-price">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </p>
          <span className="original-price">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.originalPrice)}
          </span>
          <span className="promotion-percent">
            {" "}
            - {product.promotionPercent}%
          </span>
        </div>
      ) : (
        <div className="product-detail-price">
          <p className="original-price">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </p>
        </div>
      )}

      <div className="row product-detail-ship">
        <div className="col p-2">Vận chuyển</div>
        {product.isFreeShip ? (
          <div className="col p-10 text-success">Miễn phí vận chuyển</div>
        ) : (
          <div className="col p-10">
            Phí vận chuyển: <span className="text-danger fw-600">25.000₫</span>
          </div>
        )}
      </div>

      <div className="row product-detail-description">
        <p className="col p-2 t-0 m-0 description-label">Ngày bán</p>
        <p className="col p-10 t-12 m-12 description-content">
          {dateFormat(product.created_at, "dd/MM/yyyy")}
        </p>
      </div>

      <div className="row product-detail-description">
        <p className="col p-2 t-0 m-0 description-label">Mô tả</p>
        <p className="col p-10 t-12 m-12 description-content">
          {product.shortDescription}
        </p>
      </div>

      <DetailForm onQuantitySubmit={handleSubmit} />
    </div>
  );
}

export default ProductInfo;
