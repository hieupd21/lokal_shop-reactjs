import React from "react";
import PropTypes from "prop-types";
import ByCategory from "./Filter/ByCategory";
import ByPrice from "./Filter/ByPrice";
import { FaTimes } from "react-icons/fa";
import "./style/filter.scss";

const CloseButton = (props) => (
  <a {...props}>
    <FaTimes className="network-icon" />
  </a>
);

ProductFilter.propTypes = {
  onFilterChange: PropTypes.func,
  menuToggle: PropTypes.func,
};

function ProductFilter({ onFilterChange, menuToggle }) {
  const handleCategoryChange = (id, name) => {
    if (onFilterChange) {
      const newFilters = {
        "category.id": id,
        "category.name": name,
      };
      onFilterChange(newFilters);
    }
  };

  const handlePriceChange = (value) => {
    if (onFilterChange) onFilterChange(value);
  };

  return (
    <div className="filter-list">
      <CloseButton className="close-button" onClick={menuToggle} />
      <div className="filter-item">
        <ByCategory
          onCategoryChange={handleCategoryChange}
          menuToggle={menuToggle}
        />
        <ByPrice onPriceChange={handlePriceChange} menuToggle={menuToggle} />
      </div>
    </div>
  );
}

export default ProductFilter;
