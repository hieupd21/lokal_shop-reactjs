import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style/sort.scss";

ProductSort.propTypes = {
  onSortChange: PropTypes.func,
};

function ProductSort({ onSortChange = null }) {
  const options = ["Giá tăng dần", "Giá giảm dần"];
  const valueOption = ["salePrice:ASC", "salePrice:DESC"];
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");

  const handlePriceChange = (values) => {
    if (onSortChange) onSortChange(values);
  };

  return (
    <div className="dropdown">
      <div className="drop-toggle" onClick={() => setActive(!active)}>
        <p className="drop-title">
          Sắp xếp theo: <span>{selected ? selected : "Giá tăng dần"}</span>
        </p>
      </div>

      {active && (
        <div className="drop-menu">
          {options.map((option, idx) => (
            <p
              name={valueOption[idx]}
              className="drop-item"
              key={idx}
              onClick={(e) => {
                setSelected(e.target.textContent);
                setActive(false);
                handlePriceChange(e.target.getAttribute("name"));
              }}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductSort;
