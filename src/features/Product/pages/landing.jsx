import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style/landing.scss";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay, Mousewheel, Parallax } from "swiper";
import LandingApi from "../../../api/landingApi";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination, Autoplay, Mousewheel, Parallax]);

function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="sw-row">
        <div className="col-8 grid-left">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {LandingApi.slice(0, 3).map((x) => (
              <SwiperSlide key={x.id}>
                <img src={x.img} alt={x.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-4 grid-right">
          <div className="ssd">
            <Swiper
              direction={"vertical"}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {LandingApi.slice(3, 6).map((x) => (
                <SwiperSlide key={x.id}>
                  <img src={x.img} alt={x.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="fashion">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {LandingApi.slice(6, 9).map((x) => (
                <SwiperSlide key={x.id}>
                  <img src={x.img} alt={x.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="grid-content">
        <div className="blur-ani"></div>
        <Link to="/products">
          <Button variant="contained" className="button">
            MUA SẮM THÔI
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
