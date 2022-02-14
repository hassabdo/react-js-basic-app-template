import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import firstImg  from "../../assets/png/Rectangle.png";
import secondImg  from "../../assets/png/Rectangle-2.png";
import icon1  from "../../assets/png/catching-net.png";
import icon2  from "../../assets/png/approved-user-profile.png";
import icon3  from "../../assets/png/contract.png";

const HowItWorks = () => {
  const isLoggedIn = useSelector((state: RootState) => state.authReducer.isLoggedIn);

  return (
    <div className={"app-information-block-landing"} >
      {isLoggedIn ? null : (
        <div className={"links"}>
          <div className="max-width-container">
            <div className={"buttons-wrapper"}>
              <a href={process.env.REACT_APP_APP_URL + "/signup"} className={"white-btn-landing"}>Estimer ma domiciliation</a>
              <Link to={"/contact-me"} className={"white-btn-landing"}>je souhaite être contacter</Link>
            </div>
          </div>
        </div>
      )}

      <div className={"comment-ca-marche-block max-width-container"} id={"comment-ca-marche-section"}>
       <h2 className={"title"}>Comment ça marche ?</h2>
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]} justify={"space-between"}>
          <Col xs={24} md={12} lg={12}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} className={"steps-wrapper"}>
              <Row style={{ paddingTop: "3rem" }} align={"middle"} >
                <Col xs={24} md={3} className={"step-number-wrapper"}>
                  {/* <Comment1SmallIcon /> */}
                  <div className={"step-number-icon first"}>
                    <img src={icon1} alt="icon" />
                  </div>
                </Col>
                <Col xs={24} md={20}>
                  <p style={{ marginBottom: 0 }}>
                    Choisissez une adresse de prestige pour donner de la crédibilité à votre entreprise en préservant la
                    confidentialité de votre adresse personnelle.
                  </p>
                </Col>
              </Row>
              <Row align={"middle"} style={{ paddingTop: "3rem" }}>
                <Col xs={24} md={3} className={"step-number-wrapper"}>
                  {/* <Comment2SmallIcon /> */}
                  <div className={"step-number-icon second"}>
                    <img src={icon2} alt="icon" />
                  </div>
                </Col>
                <Col xs={24} md={20}>
                  <p style={{ marginBottom: 0 }}>
                    Choisissez les options de gestion de courrier et les services adaptés à votre entreprise.
                  </p>
                </Col>
              </Row>
              <Row align={"middle"} style={{ paddingTop: "3rem" }}>
                <Col xs={24} md={3} className={"step-number-wrapper"}>
                  {/* <Comment3SmallIcon /> */}
                  <div className={"step-number-icon last"}>
                    <img src={icon3} alt="icon" />
                  </div>
                </Col>
                <Col xs={24} md={20}>
                  <p style={{ marginBottom: 0 }}>
                    Signez en ligne et obtenez votre contrat de domiciliation en 3 minutes !
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <div className={"svg-container"}>
              <img src={secondImg} alt="img" className={"img-1"} />
              <img src={firstImg} alt="img" className={"img-2"} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HowItWorks;
