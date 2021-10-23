import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import categoryApi from "../../../../../api/categoryApi";
import "./style/filter.scss";
import CategorySkeleton from "./CategorySkeleton";

ByCategory.propTypes = {
  onCategoryChange: PropTypes.func,
};

function ByCategory({ onCategoryChange = null }) {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await categoryApi.getAll();
        setCategory(data);
      } catch (error) {
        console.log("fetch category api: ", error);
      }
      setLoading(false);
    };
    fetchCategories();
  }, []);

  const handleClickCategory = (id, name) => {
    if (onCategoryChange) onCategoryChange(id, name);
  };

  return (
    <ul className="filter-category">
      <p className="filter-category-title">Thể loại</p>
      {loading ? (
        <CategorySkeleton />
      ) : (
        category.map((category) => (
          <li
            className="filter-category-item"
            key={category.id}
            onClick={() => handleClickCategory(category.id, category.name)}
          >
            {category.name}
          </li>
        ))
      )}
    </ul>
  );
}

export default ByCategory;
