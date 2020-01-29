import React from 'react';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CheckIcon from '@material-ui/icons/Check';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import '../css/Footer.css';

function Footer() {
  return (
    <div className="f-container">
      <div className="footer">
        <div className="footer-box">
          <ul>
            <li className="footer-title">SERVICES</li>
            <hr />
            <li>
              <CheckIcon className="footer-icons-grey" />
              Satisfait ou remboursé 15 jours
            </li>
            <li>
              <LockIcon className="footer-icons-grey" />
              Paiement 100% sécurisé
            </li>
            <li>
              <LocalShippingIcon className="footer-icons-grey" />
              Livraison 2 à 4 jours ouvrés en France
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <li className="footer-title">A PROPOS</li>
            <hr />
            <div className="footer-links">
              <Link to="/AboutUs" className="footer-links">
                <li>Qui sommes-nous ?</li>
              </Link>
              <Link to="/Mentions" className="footer-links">
                <li>Mentions légales</li>
              </Link>
              <Link to="/Cgu" className="footer-links">
                <li>CGU - CGV</li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <li className="footer-title">CONTACTS</li>
            <hr />
            <Link to="/Contact" className="footer-links">
              <li>
                <MailOutlineIcon className="footer-icons" />
                Mail
              </li>
            </Link>
            <li>
              <div href="+33556701422" className="tel">
                <PhoneIcon className="footer-icons" />
                05 56 70 14 22
              </div>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/b916pEiw2kmtanF86"
                className="footer-links"
              >
                {' '}
                <RoomIcon className="footer-icons" style={{ fontSize: 30 }} />
                9 Allée Serr
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33100 
                Bordeaux
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="footer-social">
        <div className="icons">
          <a href="https://www.instagram.com/lejolishop/?hl=fr">
            <InstagramIcon className="icon-social" style={{ fontSize: 50 }} />
          </a>
          <a href="https://fr-fr.facebook.com/pages/category/Bar---Grill/Le-Family-Cook-Grill-1059894704181142/">
            <FacebookIcon className="icon-social" style={{ fontSize: 50 }} />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;