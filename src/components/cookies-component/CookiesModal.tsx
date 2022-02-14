import React, {useEffect, useState} from "react";
import { Modal, Button, Row, Col } from 'antd';
import "./cookies-modal.scss";
import { initGA } from "../google-analytics/analytics"
import Cookies from 'universal-cookie';
import Saly from "../../assets/png/Illustration-Collaborative-Skin-02-BG.png";

const cookies = new Cookies();

const CookiesModal = () => {
  const useMountEffect = (fun: any) => useEffect(fun, [])
  const [visible, setVisible] = useState(false);
  const setCookieOn = () => {
    let expDays = 365;
    let d = new Date();
    d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));
    cookies.set('Domicilier', 'on', { path: '/', secure: true, domain: window.location.hostname, expires: d, sameSite: 'strict' });
    initGA();
  }
  const setCookieOff = () => {
    let expDays = 365;
    let d = new Date();
    d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));
    cookies.set('Domicilier', 'off', { path: '/', secure: true, domain: window.location.hostname, expires: d, sameSite: 'strict' });
  }
  useMountEffect(() => {
    if(!cookies.get('Domicilier')){
      setTimeout(() => {
        setVisible(true);
      }, 3000);
    }
  })
  const refuse = () => {
    setCookieOff();
    setVisible(false);
  }
  const accept = () => {
    setCookieOn();
    setVisible(false);
  }
  return (
    <Modal
      centered
      visible={visible}
      onCancel={refuse}
      onOk={accept}
      style={{ top: 10 }}
      footer={<div></div>}
      closeIcon={<></>}
      wrapClassName={"cookies-modal"}
      width={"80%"}
    >
      <div className={"cookies-modal-content"}>
        <Row>
          <Col xs={24} md={10} className={"left"}>
            <img src={Saly} alt="img" />
          </Col>
          <Col xs={24} md={14} className={"right"}>
          </Col>
        </Row>

      </div>
    </Modal>
  );
}
export default CookiesModal;
