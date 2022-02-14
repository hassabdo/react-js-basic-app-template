import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import HelpPage from "./pages/help-page/HelpPage";
import AddressesPage from "./pages/addresses-page/AddressesPage";
import AddressPage from "./pages/address-page/AddressPage";
import ContactPage from "./pages/contact-page/ContactPage";
import ContactMePage from "./pages/contact-me-page/ContactMePage";
import ComingSoonPage from "./pages/coming-soon-page/ComingSoonPage";
import ServicePage from "./pages/services-pages/service-page/ServicePage";
import DomiciliationPage from "./pages/services-pages/domiciliation-page/DomiciliationPage";
import CreateEntreprisePage from "./pages/services-pages/create-entreprise-page/CreateEntreprisePage";
import BlogPage from "./pages/blog-page/BlogPage";
import ArticlePage from "./pages/article-page/ArticlePage";
import JobOfferPage from "./pages/job-offer-page/JobOfferPage";
import CareerPage from "./pages/career-page/CareerPage";
import TermsConditionsPage from "./pages/terms-conditions-page/TermsConditionsPage";
import TermsOfUsePage from "./pages/terms-of-use-page/TermsOfUsePage";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import AboutPage from "./pages/about-page/AboutPage";
import MainLayout from "./layouts/MainLayout";
import WideLayout from "./layouts/WideLayout";

const App = ({ history }: any) => {
  return (
    <Route
      render={({ location }: any) => (
        <Switch location={location}>
          <MainLayoutRoute
            component={ContactPage}
            path={"/contact"}
            exact
          />
          <MainLayoutRoute
            component={ContactMePage}
            path={"/contact-me"}
            exact
          />
          <MainLayoutRoute
            component={LandingPage}
            path={"/"}
            exact
          />
          <MainLayoutRoute
            component={AboutPage}
            path={"/about"}
            exact
          />
          <MainLayoutRoute
            component={HelpPage}
            path={"/help"}
            exact
          />
          <MainLayoutRoute
            component={ServicePage}
            path={"/services"}
            exact
          />
          <MainLayoutRoute
            component={BlogPage}
            path={"/blog"}
            exact
          />
          <MainLayoutRoute
            component={ArticlePage}
            path={"/blog/article/:slug"}
            exact
          />
          <MainLayoutRoute
            component={DomiciliationPage}
            path={"/services/domiciliation"}
            exact
          />
          <MainLayoutRoute
            component={CreateEntreprisePage}
            path={"/services/create-entreprise"}
            exact
          />
          <MainLayoutRoute
            component={AddressesPage}
            path={"/addresses"}
            exact
          />
          <MainLayoutRoute
            component={AddressPage}
            path={"/address/:slug"}
            exact
          />
          <MainLayoutRoute
            component={CareerPage}
            path={"/career"}
            exact
          />
          <MainLayoutRoute
            component={JobOfferPage}
            path={"/career/job-offer/:slug"}
            exact
          />
          <MainLayoutRoute
            component={TermsConditionsPage}
            path={"/terms-conditions"}
            exact
          />
          <MainLayoutRoute
            component={TermsOfUsePage}
            path={"/terms-of-use"}
            exact
          />
          <WideLayoutRoute
            component={ComingSoonPage}
            path={"/soon"}
            exact
          />
          <WideLayoutRoute
            component={NotFoundPage}
            path='/404'
          />
          <Redirect
            from='*'
            to='/404'
          />
        </Switch>
      )}
    />
  );
};

const MainLayoutRoute = ({ component: Component, ...rest } : any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout location={props.location}>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

const WideLayoutRoute = ({ component: Component, ...rest } : any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <WideLayout location={props.location}>
          <Component {...props} />
        </WideLayout>
      )}
    />
  );
};

export default withRouter(App);
