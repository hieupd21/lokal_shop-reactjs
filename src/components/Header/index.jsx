import React, { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { cartItemsCountSelector } from "../../features/Cart/redux/selector";
import "./style.scss";

export default function Header() {
  const menuRight = useRef(null);
  const headerRef = useRef(null);
  const nav1Ref = useRef(null);
  const nav2Ref = useRef(null);
  const brandRef = useRef(null);
  const cartItemCount = useSelector(cartItemsCountSelector);

  const menuToggle = () => menuRight.current.classList.toggle("active");
  const CloseButton = (props) => (
    <a {...props}>
      <FaTimes className="network-icon" />
    </a>
  );
  const BarsButton = (props) => (
    <a {...props}>
      <FaBars className="bars" />
    </a>
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        headerRef.current.classList.add("scroll");
        nav1Ref.current.classList.add("title-black");
        nav2Ref.current.classList.add("title-black");
        brandRef.current.classList.add("title-black");
      } else {
        headerRef.current.classList.remove("scroll");
        nav1Ref.current.classList.remove("title-black");
        nav2Ref.current.classList.remove("title-black");
        brandRef.current.classList.remove("title-black");
      }
    });
  }, []);

  return (
    <div className="fixed-header" ref={headerRef}>
      <div className="container wide" id="isHeader">
        <div className="row">
          <div className="col brand p-4 t-4 m-11">
            <Link to="/" className="brand-title" ref={brandRef}>
              LOKAL SHOP
            </Link>
          </div>

          <div className="col navbar p-8 t-8 m-12" ref={menuRight}>
            <div className="close-button">
              <CloseButton onClick={menuToggle} />
            </div>
            <NavLink
              to="/products"
              className="nav-link"
              onClick={menuToggle}
              ref={nav1Ref}
            >
              Sản phẩm
            </NavLink>
            <NavLink
              to="/cart"
              className="nav-link cart-link"
              onClick={menuToggle}
              ref={nav2Ref}
            >
              Giỏ hàng
              <span>{cartItemCount}</span>
            </NavLink>
          </div>

          <div className="col bar-icon p-0 t-0 m-1" onClick={menuToggle}>
            <div className="icon-box">
              <BarsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
