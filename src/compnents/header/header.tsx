// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-section">
      <div className="top-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="tn-left">
                <li><i className="fa fa-phone"></i> (12) 345 67890</li>
                <li><i className="fa fa-envelope"></i> info.colorlib@gmail.com</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="tn-right">
                <div className="top-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
                <a href="#" className="bk-btn">Booking Now</a>
                <div className="language-option">
                  <img src="img/flag.jpg" alt="" />
                  <span>EN <i className="fa fa-angle-down"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
