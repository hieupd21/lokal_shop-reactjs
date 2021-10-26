import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style/filter.scss";
import { Button, TextField } from "@material-ui/core";

ByPrice.propTypes = {
  onPriceChange: PropTypes.func,
  menuToggle: PropTypes.func,
};

function ByPrice({ onPriceChange = null, menuToggle }) {
  const [price, setPrice] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChangePrice = () => {
    if (onPriceChange) onPriceChange(price);
    menuToggle();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPrice((prevPrice) => ({
      ...prevPrice,
      [name]: value,
    }));
  };

  return (
    <div className="filter-price">
      <p className="filter-price-title">Mức giá</p>
      <div className="filter-price-input">
        <TextField
          type="number"
          name="salePrice_gte"
          variant="outlined"
          placeholder="0"
          onChange={handleChangeInput}
          autoComplete="off"
        />
        <span> - </span>
        <TextField
          type="number"
          name="salePrice_lte"
          variant="outlined"
          placeholder="0"
          onChange={handleChangeInput}
          autoComplete="off"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        className="filter-price-button"
        onClick={handleChangePrice}
        fullWidth
      >
        Áp dụng
      </Button>
    </div>
  );
}

export default ByPrice;
