import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@material-ui/lab";

CategorySkeleton.propTypes = {
  length: PropTypes.number,
};

function CategorySkeleton({ length = 6 }) {
  return (
    <>
      {Array.from(new Array(length)).map((x, idx) => (
        <li className="filter-category-item" key={idx}>
          <Skeleton width="90%" />
        </li>
      ))}
    </>
  );
}

export default CategorySkeleton;
