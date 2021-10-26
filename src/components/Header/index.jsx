import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import barIcon from "../../image/bars.ico";
import { FaTimes } from "react-icons/fa";
import "./style.scss";

export default function Header() {
  const menuRight = useRef(null);
  const menuToggle = () => menuRight.current.classList.toggle("active");
  const CloseButton = (props) => (
    <a {...props}>
      <FaTimes className="network-icon" />
    </a>
  );

  return (
    <div className="fixed-header">
      <div className="container wide" id="isHeader">
        <div className="row">
          <div className="col brand p-4 t-4 m-11">
            <Link to="/" className="brand-title">
              LOKAL SHOP
            </Link>
          </div>

          <div className="col navbar p-8 t-8 m-12" ref={menuRight}>
            <div className="close-button">
              <CloseButton onClick={menuToggle} />
            </div>
            <NavLink to="/products" className="nav-link" onClick={menuToggle}>
              Sản phẩm
            </NavLink>
          </div>

          <div className="col bar-icon p-0 t-0 m-1" onClick={menuToggle}>
            <img src={barIcon} alt={barIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
