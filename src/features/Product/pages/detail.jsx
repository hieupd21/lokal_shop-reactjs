import { Box, LinearProgress } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router";
import ProductInfo from "../components/Detail/ProductInfo";
import ProductThumbnail from "../components/Detail/ProductThumbnail";
import ProductRela from "../components/Detail/ProductRela";
import useProductDetail from "../hooks/useProductDetail";
import "./style/detail.scss";

export default function ProductDetail() {
  const {
    params: { productId },
  } = useRouteMatch();

  const { loading, product, productRela } = useProductDetail(productId);

  if (loading) {
    return (
      <Box>
        <LinearProgress className="progress" />
      </Box>
    );
  }

  return (
    <div className="container wide" id="isDetail">
      <div className="row" id="detail-info">
        <div className="col col-thumbnail p-5 t-6 m-12">
          <ProductThumbnail product={product} />
        </div>
        <div className="col col-content p-7 t-6 m-12">
          <ProductInfo product={product} />
        </div>
      </div>

      <div className="row" id="rela-info">
        <ProductRela productRela={productRela} />
      </div>
    </div>
  );
}
