import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../inc/Icon";

import "./_hero-banner.scss";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="row">
          <div className="col-left">
            <div className="banner-info">
              <h1>
                GIVING <span>GLOBAL BRANDS</span> A SEAT AT THE TABLE
              </h1>
              <ul className="social">
                <li>
                  <Link to="/">
                    <Icon name="in-icon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-right">
            <div className="banner-info"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
