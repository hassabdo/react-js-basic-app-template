import React from "react";
import { Row, Col } from "antd";
import ServiceItemLanding from "./ServiceItemLanding";
import PercentageSmallIconSvg from "../../svg-components/icons/PercentageSmallIconSvg";
import ServicesBuildingSmallIcon from "../../svg-components/icons/ServicesBuildingSmallIcon";
import PersonTraderPhoneSmallIcon from "../../svg-components/icons/PersonTraderPhoneSmallIcon";
import FixingToolsSmallIcon from "../../svg-components/icons/FixingToolsSmallIcon";
import CalendarSmallIcon from "../../svg-components/icons/CalendarSmallIcon";
import FlyingLettreSmallIcon from "../../svg-components/icons/FlyingLettreSmallIcon";
import BenefitsOnlineSmallIcon from "../../svg-components/icons/BenefitsOnlineSmallIcon";
import BenefitsQRSmallIcon from "../../svg-components/icons/BenefitsQRSmallIcon";
import BenefitsAppSmallIcon from "../../svg-components/icons/BenefitsAppSmallIcon";
import BenefitsSecurePaySmallIcon from "../../svg-components/icons/BenefitsSecurePaySmallIcon";
import BenefitsSupportSmallIcon from "../../svg-components/icons/BenefitsSupportSmallIcon";
import BenefitsAuthSmallIcon from "../../svg-components/icons/BenefitsAuthSmallIcon";
const ServicesLandingBlock = () => {
return (
<div className={"services-landing-block"} id={"services-landing-section"}>
  <div style={{paddingTop: "3rem"}}>
    <h2 className={"title"}>
      Un service unique et inédit en Tunisie et en Afrique
    </h2>
    <h2 className={"blue-sub-title"}>
      Profiter d'une solution entièrement en ligne
    </h2>
    <div className="transparent-marger" />
    <Row gutter={[24,24]} style={{ marginRight:"10%", marginLeft:"10%"}}>
      <Col md={8} xs={24}>
      <ServiceItemLanding title={"Tarifs transparents"}
        description={ "Des tarifs fixes, sans frais cachés, caution ou dépôt de garantie." }
        icon={<PercentageSmallIconSvg />}
      />
      </Col>
      <Col md={8} xs={24}>
      <ServiceItemLanding title={"Adresse professionnelle"} description={"Parceque une enseigne de luxe nécissi."}
        icon={<ServicesBuildingSmallIcon />}
      />
      </Col>
      <Col md={8} xs={24}>
      <ServiceItemLanding title={"Service client réactif"}
        description={ "Nos conseillers sont disponibles afin de vous accompagner dans la construction de votre projet."
        } icon={<PersonTraderPhoneSmallIcon />}
      />
      </Col>
      <Col md={8} xs={24}>
      <ServiceItemLanding title={"Services sur mesure"}
        description={ "Domicilier.tn met à votre disposition une solution 100% personnalisable." }
        icon={<FixingToolsSmallIcon />}
      />
      </Col>
      <Col md={8} xs={24}>
      <ServiceItemLanding title={"Sans engagement"} description={"Pas d’engagement réquis."} icon={<CalendarSmallIcon />
      }
      />
      </Col>
      <Col md={8} xs={24}>
      <ServiceItemLanding title={"Courrier en temps réel"}
        description={ "Bénéficier d’une interface de gestion de courrier en temps réel" }
        icon={<FlyingLettreSmallIcon />}
      />
      </Col>
    </Row>
  </div>
  {/* <div className="yellow-text-block-container">
    <h2 className={"white-sub-title"}>
      <span className={"blue-text"}>domicilier.tn</span> est la nouvelle
      génération de la domiciliation, avec des services avant-garde, nous
      suscitons un déclic dans l’avenir de l’entrepreneuriat en Afrique.
    </h2>
  </div> */}
  <div className={"services-benefits-block"} id={"services-benefits-section"}
    style={{background:"#F4F7FC", marginTop:"5rem"}}>
    <Row style={{ marginRight:"10%", marginLeft:"10%", paddingTop:"3rem", paddingBottom:"3rem"}} gutter={[{ xs: 8, sm:
      16, md: 24, lg: 32 }, 16]} justify={"space-between"}>
      <Col xs={24} lg={10}>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%"}}>
        <h2 className={"services-benefits-title"}>Plus besoin de se déplacer pour se domicilier</h2>
        <p>
          <span style={{color:"#3240FF"}}>domicilier.tn</span> est la nouvelle génération de la domiciliation,
          avec des services avant-garde, nous suscitons un déclic dans l’avenir de
          l’entrepreneuriat en Afrique.</p>
      </div>
      </Col>
      <Col xs={24} lg={14}>
      <Row gutter={[24,24]} style={{ marginRight:"10%", marginLeft:"10%"}} className={"service-benefits-list"}>
        <Col md={8} xs={24}>
        <div className={"service-landing-item"}>
          <div className="svg-service-container">
            {
            <BenefitsOnlineSmallIcon />}
          </div>
          <h3>Entièrement en ligne</h3>
        </div>
        </Col>
        <Col md={8} xs={24}>
        <div className={"service-landing-item"}>
          <div className="svg-service-container">{
            <BenefitsQRSmallIcon />}</div>
          <h3>Signature electronique</h3>
        </div>
        </Col>
        <Col md={8} xs={24}>
        <div className={"service-landing-item"}>
          <div className="svg-service-container">{
            <BenefitsAppSmallIcon />}</div>
          <h3>Application de gestion</h3>
        </div>
        </Col>
        <Col md={8} xs={24}>
        <div className={"service-landing-item"}>
          <div className="svg-service-container">{
            <BenefitsSecurePaySmallIcon />}</div>
          <h3>Paiement sécruisé</h3>
        </div>
        </Col>
        <Col md={8} xs={24}>
        <div className={"service-landing-item"}>
          <div className="svg-service-container">{
            <BenefitsSupportSmallIcon />}</div>
          <h3>Support <br /> 7/7</h3>
        </div>
        </Col>
        <Col md={8} xs={24}>
        <div className={"service-landing-item"}>
          <div className="svg-service-container">{
            <BenefitsAuthSmallIcon />}</div>
          <h3>Double authentification</h3>
        </div>
        </Col>
      </Row>
      </Col>
    </Row>
  </div>
</div>
);
};

export default ServicesLandingBlock;
