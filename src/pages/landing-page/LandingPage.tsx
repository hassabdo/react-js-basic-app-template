import React, { useEffect } from "react";
import "./landing-page.scss";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Title"
    const description = document.querySelector('meta[name="description"]');
    if(description){
      description.setAttribute("content", "Description");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if(canonical){
      canonical.setAttribute("href", process.env.REACT_APP_SITE_URL);
    }
  })
  return (
    <div className={"landing-page"}>
    </div>
  );
};

export default LandingPage;
