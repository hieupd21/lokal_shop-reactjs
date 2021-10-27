import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import "./style/list.scss";

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList({ products = [] }) {
  return (
    <div className="row product-list">
      {products.map((product) => (
        <div className="col product-item p-3 t-4 m-6" key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
