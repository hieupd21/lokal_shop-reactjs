import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import barIcon from "../../image/bars.ico";
import "./style.scss";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="fixed-header">
      <div className="container wide" id="isHeader">
        <div className="row">
          <div className="col brand p-4 t-4 m-11">
            <Link to="/" className="brand-title">
              LOKAL SHOP
            </Link>
          </div>

          <div className="col navbar p-8 t-8 m-0">
            <NavLink to="/products" className="nav-link">
              Sản phẩm
            </NavLink>
          </div>

          <div
            className="col bar-icon p-0 t-0 m-1"
            onClick={() => {
              setIsMobile(!isMobile);
            }}
          >
            <img src={barIcon} alt={barIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
