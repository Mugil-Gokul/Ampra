import React from "react";
import Registration from "../../components/Registration";
import HeroSection from "../../components/HeroSection";
import ModernFacilities from "./ModernFacilities";
import HoursOfOperation from "./HoursOfOperation";


const GRE = () => {
  return (
    
    <>
      <HeroSection
        // backgroundImage={galleryHeroImg}
        breadcrumb="Home / GRE"
        align="left"
      />
      <Registration
      examName="ETS GRE"
      officialLink="https://www.ets.org/gre"
      title="Register for GRE"
      description="Take the next step toward graduate studies with the GRE exam."
    />
      <ModernFacilities />
      <HoursOfOperation />
    </>
  );
};

export default GRE;