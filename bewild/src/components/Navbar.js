import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../pictures/logo.png';
import Compte from '../pictures/compte.png';
import Panier from '../pictures/panier.png';
import Burger from './Burger';

import '../css/Navbar.css';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      isLog: false
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    
    return (

      <div className="all-links">
        <div className="burger">
          <Burger pageWrapId={'page-wrap'} outerContainerId={'Navbar'} />
        </div>

        <div className="left">
          <div className="news">
            <Link to="/about" className="news">
              About
            </Link>
          </div>
          <Link to="/leshop" className="brand">
            Shop
          </Link>
        </div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <div className="right">
          <div className="acc">
            <Link className="lala" to="/signup">
              <img className="acclogo" src={Compte} alt="acc" />
            </Link>
          </div>
          <div className="ord">
              <Link to="/panier">
                <img className="panierlogo" src={Panier} alt="panier" />
              </Link>
          </div>
        </div>
      </div>
    );
  }
}



export default Navbar;
