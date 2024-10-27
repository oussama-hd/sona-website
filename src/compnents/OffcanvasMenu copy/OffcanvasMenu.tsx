// src/components/OffcanvasMenu.tsx
import React from 'react';

const OffcanvasMenu: React.FC = () => {
  return (
    <>
      <div className="offcanvas-menu-overlay"></div>
      <div className="canvas-open">
        <i className="icon_menu"></i>
      </div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="icon_close"></i>
        </div>
        <nav className="mainmenu mobile-menu">
          <ul>
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </nav>
        <div className="top-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>
      </div>
    </>
  );
};

export default OffcanvasMenu;
