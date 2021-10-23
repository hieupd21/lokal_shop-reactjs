import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

export default function Header() {
  return (
    <div className="fixed-header">
      <div className="container wide" id="isHeader">
        <div className="row">
          <div className="col brand p-4">
            <Link to="/" className="brand-title">
              LOKAL SHOP
            </Link>
          </div>

          <div className="col navbar p-8">
            <NavLink to="/products" className="nav-link">
              Sản phẩm
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
