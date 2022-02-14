import React from "react";
import "./landing-footer.scss";
import { Row, Col } from "antd";
import Logo from "../../svg-components/Logo";
import { Link } from "react-router-dom";
import PhoneIcon from "../../svg-components/icons/PhoneIcon";
import Whatsup from "../../svg-components/icons/Whatsup";
import Mail from "../../svg-components/icons/Mail";
import Place from "../../svg-components/icons/Place";
import Facebook from "../../svg-components/icons/social/Facebook";
import Instagram from "../../svg-components/icons/social/Instagram";
import Youtube from "../../svg-components/icons/social/Youtube";
import LinkedIn from "../../svg-components/icons/social/LinkedIn";
import footerBack from './footer-back.png';

const LandingFooter = () => {
return (
<div className={"landing-footer"} style={{backgroundImage: `url('${footerBack}')`}}>
  <div className="max-width-container footer-content">
    <div className={"logo-wrapper"}>
      <Logo />
    </div>
    <div className={"desc"}>
      <p>
        <strong>domicilier.tn</strong> est la nouvelle génération de la domiciliation, avec des services avant-garde,
        nous suscitons un déclic dans l’avenir de l’entrepreneuriat en Afrique.
      </p>
    </div>
    <nav className={"footer-nav"}>
      <ul className={"footer-nav-list"}>
        <li className={"footer-nav-list-header"}>Domicilier.tn</li>
        <li className={"footer-nav-list-item"}><Link to={"/about"}>A propos</Link></li>

        <li className={"footer-nav-list-item"}><Link to={"/help"}>FAQ</Link></li>

        <li className={"footer-nav-list-item"}><Link to={"/blog"}>Blog</Link></li>

        <li className={"footer-nav-list-item"}><Link to={"/contact"}>Contact</Link></li>

        <li className={"footer-nav-list-item"}><Link to={"/terms-of-use"}>CGV / CGU</Link></li>

        <li className={"footer-nav-list-item"}><Link to={"/terms-conditions"}>Mentions légales</Link></li>
      </ul>
      <ul className={"footer-nav-list"}>
        <li className={"footer-nav-list-header"}>Nos services</li>
        <li className={"footer-nav-list-item"}><Link to={"/services/domiciliation"}>Domiciliation</Link></li>

        <li className={"footer-nav-list-item"}><Link to={"/services/create-entreprise"}>Création d’entreprise</Link></li>

        <li className={"footer-nav-list-item"}><Link to={"/addresses"}>Nos adresses</Link></li>

        <li className={"footer-nav-list-item"}><Link to={"/career"}>Recrutement</Link></li>
      </ul>
      <ul className={"footer-nav-list"}>
        <li className={"footer-nav-list-header contact"}>Contact</li>

        <li className={"footer-nav-list-item"}><Row gutter={[32, 12]}><Col  xs={24} md={2} lg={2}><div className={"contact-icon"}><PhoneIcon /></div></Col><Col xs={24} md={20} lg={20}><a href={"phone:+216 93 314 067"}>+216 93 314 067</a></Col></Row></li>

        <li className={"footer-nav-list-item"}><Row gutter={[32, 12]}><Col  xs={24} md={2} lg={2}><div className={"contact-icon"}><Whatsup/></div></Col><Col xs={24} md={20} lg={20}><a href={"phone:+216 93 314 067"}>+216 93 314 067</a></Col></Row></li>

        <li className={"footer-nav-list-item"}><Row gutter={[32, 12]}><Col  xs={24} md={2} lg={2}><div className={"contact-icon"}><Mail/></div></Col><Col xs={24} md={20} lg={20}><a href={"mailto:contact@domicilier.tn"}>contact@domicilier.tn</a></Col></Row></li>

        <li className={"footer-nav-list-item"}><Row gutter={[32, 12]}><Col  xs={24} md={2} lg={2}><div className={"contact-icon"}><Place/></div></Col><Col xs={24} md={20} lg={20}><address>12 Impasse Cordou, Manar 1 2092, Tunis , Tunisie</address></Col></Row></li>
      </ul>
    </nav>
  </div>
  <div className="max-width-container bottom">
    <div className={"social-links"}>
      <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><Facebook/></a>
      <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><Instagram/></a>
      <a href="https://www.youtube.com" rel="noreferrer" target="_blank"><Youtube/></a>
      <a href="https://www.linkedin.com" rel="noreferrer" target="_blank"><LinkedIn/></a>
    </div>
    <small>© 2021 Powered by Atomart Design Studio</small>
  </div>
</div>
);
};

export default LandingFooter;
