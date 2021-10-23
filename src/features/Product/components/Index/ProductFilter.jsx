import React from "react";
import PropTypes from "prop-types";
import ByCategory from "./Filter/ByCategory";
import ByPrice from "./Filter/ByPrice";

ProductFilter.propTypes = {
  onFilterChange: PropTypes.func,
};

function ProductFilter({ onFilterChange }) {
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
      <div className="filter-item">
        <ByCategory onCategoryChange={handleCategoryChange} />
        <ByPrice onPriceChange={handlePriceChange} />
      </div>
    </div>
  );
}

export default ProductFilter;
