import React from "react";

interface ServiceItemLandingPropsTypes {
  title: string;
  description: string;
  icon: React.FunctionComponentElement<any>;
}
const ServiceItemLanding: React.FC<ServiceItemLandingPropsTypes> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={"service-landing-item"}>
      <div className="svg-service-container">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItemLanding;
