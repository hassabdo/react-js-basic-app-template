import React, { useEffect, useState } from "react";
import { Layout, Affix, Drawer } from "antd";
import "./landing-navbar.scss";
import Logo from "../../svg-components/Logo";
import { NavLink, Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { OPEN_ADDRESSES_SIDER, CLOSE_ADDRESSES_SIDER, OPEN_SERVICES_SIDER, CLOSE_SERVICES_SIDER } from "../../actions/ui-actions/types";
import { getAddresses, getFAQs, getPromotions } from "../../actions/services-actions/actions";
import BigPromotionalCard from "../promotional-cards-components/BigPromotionalCard";

const { Header } = Layout;
const LandingNavbar = ({ history }: any) => {
  const addresseSiderOpen = useSelector(
    (state: RootState) => state.uiReducer.addresseSiderOpen
  );
  const servicesSiderOpen = useSelector(
    (state: RootState) => state.uiReducer.servicesSiderOpen
  );
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );
  const addresses = useSelector((state: RootState) => state.serivcesReducer.addresses);
  const promotions = useSelector((state: RootState) => state.serivcesReducer.promotions);
  const faqs = useSelector((state: RootState) => state.serivcesReducer.faqs);
  const dispatch = useDispatch();
  const useMountEffect = (fun: any) => useEffect(fun, [])
  const [drawerMobileOpened, setDrawerMobileOpened] = useState(false);
  useEffect(() => {
    history.listen((location: any) => {
      setTimeout(() => {
        if(drawerMobileOpened){
          setDrawerMobileOpened(false);
        }
      }, 400);
    });
  }, [history]);
  useMountEffect(() => {
    if(addresses.length == 0){
      dispatch(getAddresses());
    }
    if(faqs.length == 0){
      dispatch(getFAQs());
    }
    if(!promotions){
      dispatch(getPromotions());
    }
  })
  const handleAdressesSidebar = (e: any) => {
    e.preventDefault();
    if(drawerMobileOpened){
      setDrawerMobileOpened(false);
    }
    if(!addresseSiderOpen){
      dispatch({type: OPEN_ADDRESSES_SIDER});
    }else{
      dispatch({type: CLOSE_ADDRESSES_SIDER});
    }
  }

  const handleServicesSidebar = (e: any) => {
    e.preventDefault();
    if(drawerMobileOpened){
      setDrawerMobileOpened(false);
    }
    if(!servicesSiderOpen){
      dispatch({type: OPEN_SERVICES_SIDER});
    }else{
      dispatch({type: CLOSE_SERVICES_SIDER});
    }
  }
  return (
    <>
    <Affix>
      <Header
        className={"landing-navbar"}
      >
        <div className="max-width-container">
          <div className="flex-navbar">
            <Link to={"/"}>
              <div className="logo-landing">
                <Logo />
              </div>
            </Link>
            <div className="centered-menu">
              <NavLink
                exact
                to={"/about"}
                activeClassName={"active"}
                className={"landing-navlink"}
              >
                A propos
              </NavLink>
              <NavLink
                activeClassName={"active"}
                to={"/addresses"}
                className={"landing-navlink"}
                onClick={handleAdressesSidebar}
              >
                Nos adresses
              </NavLink>
              <NavLink
                to={"/services"}
                className={"landing-navlink"}
                activeClassName={"active"}
                onClick={handleServicesSidebar}
              >
                Nos Services
              </NavLink>
              <NavLink
                exact
                to={"/help"}
                activeClassName={"active"}
                className={"landing-navlink"}
              >
                Besoin d'aide ?
              </NavLink>
            </div>

            {isLoggedIn ? (
              <div className="auth-btns">
                <a
                  className={"landing-auth-btn"}
                  href={process.env.REACT_APP_APP_URL}
                >
                  Dashboard
                </a>
              </div>
            ) : (
              <div className="auth-btns">
                <a
                  className={"landing-auth-btn"}
                  href={process.env.REACT_APP_APP_URL + "/login"}
                >
                  Sign in
                </a>
                <a
                  className={"landing-auth-btn"}
                  href={process.env.REACT_APP_APP_URL + "/signup"}
                >
                  Je me domicile
                </a>
              </div>
            )}

            <button
              onClick={() => setDrawerMobileOpened(!drawerMobileOpened)}
              className={"menu-drawer-icon"}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
        <BigPromotionalCard/>
      </Header>
      <Drawer
        placement="right"
        width={"80%"}
        closeIcon={<CloseOutlined />}
        onClose={() => setDrawerMobileOpened(false)}
        className={"drawer-mobile-landing"}
        visible={drawerMobileOpened}
        title={""}
      >
        <div className="centered-menu">
          <NavLink
              exact
              to={"/about"}
              onClick={() => setDrawerMobileOpened(false)}
              activeClassName={"active"}
              className={"landing-navlink"}
            >
              A propos
          </NavLink>
          <NavLink
            to={"/addresses"}
            className={"landing-navlink"}
            activeClassName={"active"}
            onClick={handleAdressesSidebar}
          >
            Nos adresses
          </NavLink>
          <NavLink
            to={"/services"}
            className={"landing-navlink"}
            activeClassName={"active"}
            onClick={handleServicesSidebar}
          >
            Nos Services
          </NavLink>

          <NavLink
            exact
            activeClassName={"active"}
            to={"/help"}
            onClick={() => setDrawerMobileOpened(false)}
            className={"landing-navlink"}
          >
            Besoin d'aide ?
          </NavLink>
        </div>
        {isLoggedIn ? (
          <div className="auth-btns">
            <a
              className={"landing-auth-btn"}
              href={process.env.REACT_APP_APP_URL}
            >
              Dashboard
            </a>
          </div>
        ) : (
          <div className="auth-btns">
            <a
              className={"landing-auth-btn"}
              href={process.env.REACT_APP_APP_URL + "/login"}
            >
              Sign in
            </a>
            <a
              className={"landing-auth-btn"}
              href={process.env.REACT_APP_APP_URL + "/signup"}
            >
              Je me domicile
            </a>
          </div>
        )}
      </Drawer>
    </Affix>
    </>
  );
};

export default withRouter(LandingNavbar);
