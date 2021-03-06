import { Breadcrumbs, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import productApi from "../../../api/productApi";
import ProductFilter from "../components/Index/ProductFilter";
import ProductList from "../components/Index/ProductList";
import ProductSkeleton from "../components/Index/ProductSkeleton";
import ProductSort from "../components/Index/ProductSort";
import "./style/index.scss";
import queryString from "query-string";
import ByViewer from "../components/Index/Filter/ByViewer";
import { useRef } from "react";

export default function ProductIndex() {
  const history = useHistory();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
  });
  const [filters, setFilters] = useState({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 20,
    _sort: queryParams._sort || "salePrice:ASC",
  });
  const countFilter = Object.keys(filters).length;

  const menuLeft = useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle("active");

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  }, [history, filters]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("fetch product api: ", error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [filters]);

  const handlePaginationChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: value,
    }));
  };

  const handleFilterChange = (values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...values,
    }));
  };

  const handleViewChange = (value) => {
    setFilters(value);
  };

  return (
    <div className="container wide" id="isContent">
      <div className="row">
        <div className="col p-12 t-12 m-12" id="isBanner">
          <div className="banner-header">
            <p className="text-one">S???n ph???m</p>
            <p className="text-two">
              LOKAL SHOP b??n s???n ph???m th???i trang, thi???t v??? di ?????ng v?? laptop
            </p>
          </div>
        </div>
        <div className="col p-3 t-12 m-12" id="isCategory" ref={menuLeft}>
          <ProductFilter
            onFilterChange={handleFilterChange}
            menuToggle={menuToggle}
          />
        </div>
        <div className="col p-9 t-12 m-12" id="isProduct">
          <div className="product-head">
            <div className="filter-box">
              <p onClick={menuToggle}>
                B??? l???c: <span>{countFilter}</span>
              </p>
            </div>
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
              <Link color="inherit" to="/">
                Trang ch???
              </Link>
              <Typography color="textPrimary" style={{ fontWeight: 600 }}>
                S???n ph???m
              </Typography>
            </Breadcrumbs>

            <ProductSort onSortChange={handleSortChange} />
          </div>

          <ByViewer filters={filters} onViewChange={handleViewChange} />

          {loading ? (
            <ProductSkeleton onFilterChange={handleFilterChange} />
          ) : (
            <ProductList products={productList} />
          )}

          <div className="pagination">
            <Pagination
              count={Math.ceil(pagination.total / pagination.limit)}
              page={pagination.page}
              variant="outlined"
              color="primary"
              onChange={handlePaginationChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
