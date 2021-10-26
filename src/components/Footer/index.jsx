import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./style.scss";

const GitLink = (props) => (
  <a {...props}>
    <FaGithub className="network-icon" />
  </a>
);

const FaceLink = (props) => (
  <a {...props}>
    <FaFacebookF className="network-icon" />
  </a>
);

const InsLink = (props) => (
  <a {...props}>
    <FaInstagram className="network-icon" />
  </a>
);

const YouLink = (props) => (
  <a {...props}>
    <FaYoutube className="network-icon" />
  </a>
);

const MyLink = (props) => <a {...props}>DUYHIEU</a>;

export default function Footer() {
  return (
    <div className="footer-fluid">
      <div className="container wide" id="isFooter">
        <div className="row">
          <div className="col p-4 t-4 m-12 brand">
            <Link to="/" className="brand-title">
              LOKAL SHOP
            </Link>
          </div>

          <div className="col p-4 t-4 m-12 info">
            <p className="info-title">Thông tin liên lạc</p>
            <div className="box-info">
              <p>Địa điểm của chúng tôi:</p>
              <p>K83/15 Đinh Tiên Hoàng, TP Đà Nẵng</p>
            </div>
            <div className="box-info">
              <p>Số điện thoại:</p>
              <p>+84 703 928 702</p>
            </div>
          </div>

          <div className="col p-4 t-4 m-12 network">
            <GitLink
              href="https://github.com/hieupd21"
              className="network-link"
            />
            <FaceLink
              href="https://www.facebook.com/hieupd21"
              className="network-link"
            />
            <InsLink
              href="https://www.instagram.com/hieupd21/?hl=vi"
              className="network-link"
            />
            <YouLink
              href="https://www.youtube.com/channel/UCmyX4EUhTwndVK9wEKSu5PQ"
              className="network-link"
            />
          </div>
        </div>

        <div className="row">
          <div className="col p-12 t-12 m-12 copyright">
            <p>
              © Copyright 2020, All rights reserved. Design by{" "}
              <MyLink href="https://www.facebook.com/hieupd21" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
