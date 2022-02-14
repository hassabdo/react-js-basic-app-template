import React, {useEffect, useState} from "react";
import "./cookies-modal.scss";
import { initGA } from "../google-analytics/analytics"
import Cookies from 'universal-cookie';

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
    <></>
  );
}
export default CookiesModal;
