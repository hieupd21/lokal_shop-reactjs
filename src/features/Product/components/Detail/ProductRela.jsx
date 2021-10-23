import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-elastic-carousel";
import DetailRela from "./DetailRela";
import "./style/rela.scss";

ProductRela.propTypes = {
  productRela: PropTypes.array,
};

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];

function ProductRela({ productRela = null }) {
  const randomProduct = shuffleArray(productRela);

  return (
    <div className="product-rela">
      <h2>Sản phẩm liên quan</h2>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {randomProduct.slice(0, 8).map((product) => (
            <div key={product.id} className="carousel-wrapper">
              <DetailRela product={product} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductRela;
