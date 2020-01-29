import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import logo from '../pictures/logo.png';

export default () => {
  return (
    <Menu className="allBurger">
      <div className="allBurger">
        <div className="logoBurger">
          <Link to="/">
            <img className="logoBurger2" src={logo} alt="logoBurger2" />
          </Link>
        </div>
        <div className="catBurger">
          <div className="About">
          <a className="news" href="/Nouveauté">
            About
          </a>
          </div>
          <div className="Shop">
          <a className="coll" href="/Collections">
            Shop
          </a>
          </div>
        </div>
      </div>
    </Menu>
  );
};