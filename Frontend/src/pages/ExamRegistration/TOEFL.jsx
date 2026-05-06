import React from "react";
import HeroSection from "../../components/HeroSection";
import Registration from "../../components/Registration";
import ModernFacilities from "./ModernFacilities";
import HoursOfOperation from "./HoursOfOperation";

const TOEFL = () => {
  return (
    <>
      <HeroSection
        // backgroundImage={galleryHeroImg}
        breadcrumb="Home / TOEFL"
        align="left"
      />
      <Registration
        examName="ETS TOEFL"
        officialLink="https://www.ets.org/toefl"
        title="Register for TOEFL"
        description="Demonstrate your English proficiency with TOEFL accepted worldwide."
      />
      <ModernFacilities />
      <HoursOfOperation />
    </>
  );
};

export default TOEFL;
