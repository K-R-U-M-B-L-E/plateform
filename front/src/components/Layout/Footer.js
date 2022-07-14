import React from "react";
import "./Footer.css"

import linkedin from '../../ressources/13.png';
import twitter from '../../ressources/14.png';
import instagram from '../../ressources/15.png';


function Footer() {
    return (
            <div className="footer">
                <div className="footer-title">Krumble</div>
                <div className="footer-menu">
                    <a className="footer-menu-text" href="#benefits">Avantages</a>
                    <a className="footer-menu-text" href="#pricing">Pricing</a>
                    <div className="footer-menu-text"  /*FIX ME*/ >Contact</div>
                    <div className="footer-menu-text"  /*FIX ME*/>S'abonner</div>
                    <div className="footer-menu-text"  /*FIX ME*/>Legal</div>
                </div>
                <div className="footer-subtitle">Nous suivre</div>
                <div className="footer-social-media">
                    <a href="https://www.linkedin.com/company/krumble-startup">
                        <img className="footer-social-image" src={linkedin} alt="" />
                    </a>
                    <a href="https://instagram.com">
                        <img className="footer-social-image" src={instagram} alt="" />
                    </a>
                    <a href="https://twitter.com">
                        <img className="footer-social-image" src={twitter} alt="" />
                    </a>
                </div>
                <div className="footer-legal"> © Krumble 2022  |  Tous droits réservés</div>
            </div>
    )
}

export default Footer;
