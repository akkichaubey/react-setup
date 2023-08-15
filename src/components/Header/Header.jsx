import React, { useState } from "react";
import { Link } from "react-router-dom";

// style
import "./_header.scss";
import Icon from "../../inc/Icon";

const Header = () => {
  const [isMenuAactiv, setIsMenuAactiv] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="head-left">
            <div className="head-logo">
              <Link to="/">
                discssi<span>o</span>n b<span>o</span>x
              </Link>
            </div>
            <div className="head-spotlight">The Spotlight Experience</div>
          </div>
          <div className="head-right">
            <div className="head-login">
              <button type="button" className="btn hover">
                <span>
                  <Icon name="user-icon" width={18} height={18} /> Lisa-Marie
                  Carter
                </span>
              </button>
            </div>
            <div className="menu-bar">
              <button
                type="button"
                className={`menu-toggle ${isMenuAactiv ? "active" : ""}`}
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
