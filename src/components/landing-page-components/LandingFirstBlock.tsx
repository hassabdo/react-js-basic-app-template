import React, { useState } from "react";
import { Input, Row, Col, Form } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import WomanPicture from "../../assets/png/woman.png";


const LandingFirstBlock = () => {
  const isLoggedIn = useSelector((state: RootState) => state.authReducer.isLoggedIn);
  const [form] = Form.useForm();
  const [iframeIsLoaded, setIsLoaded] = useState(false);
  const postCrossDomainMessage = (msg : any) => {
    var ifrm : any = document.getElementById('ifr');
    if(ifrm){
      ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
      ifrm.postMessage(msg, "*");
    }
  }
  const onClickStart = (values: any) => {
    if(iframeIsLoaded){
      var postMsg = {email: values.email};
      postCrossDomainMessage(JSON.stringify(postMsg));
      setTimeout(() => {
        window.open(process.env.REACT_APP_APP_URL + "/signup", "_self");
      }, 500);
    }
  }
  return (
    <>
      <div className={"landing-first-block"}>
        <div className={"max-width-container"}>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]} justify={"space-between"}>
            <Col xs={24} md={14} lg={14}>
              <div>
                <div>
                  <h1 className={"huge-blue-txt-h1"}>
                    Commencez
                    <span className={"thin-huge-h1"}>
                      {" "}
                      à
                      <br />
                      domicilier votre projet
                      <br />
                      avec
                    </span>{" "}
                    <span className={"thinner-bold"}>domicilier.tn</span>
                  </h1>
                </div>
                {/* <div className="marged-top-h2"></div> */}

                <div>
                  <ul className={"ul-simple"}>
                    <li>En 5 minutes & entierement en ligne</li>
                    <li>Signature électronique</li>
                    <li>Interface client dédiée</li>
                  </ul>
                </div>
                {isLoggedIn ? null
                  : (
                    <div className={"start-now"}>
                      <Form
                        name="start-now-form"
                        onFinish={onClickStart}
                        className={"contact-form"}
                        form={form}
                      >
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Tapez une adresse email SVP!",
                            },
                            {
                              type: "email",
                              message: "Tapez une adresse email valide SVP!",
                            },
                          ]}
                        >
                          <Input
                            placeholder="E-mail"
                            size="large"
                            suffix={<button type="submit" className={"blue-btn"}>Commencer !</button>}
                          />
                        </Form.Item>
                      </Form>
                    </div>
                  )}
              </div>
            </Col>
            <Col xs={24} md={10} lg={10}>
              <div className={"svg-container-home-animated"}>
                <img src={WomanPicture} alt="WomanPicture" />
              </div>
            </Col>
          </Row>
        </div>
        <iframe title="set-email" style={{display: "none"}} onLoad={(e) => setIsLoaded(true)} src={process.env.REACT_APP_APP_URL+ "/get-post-from-site.html"} id="ifr"></iframe>
      </div>
    </>
  );
};

export default LandingFirstBlock;
