import React from "react";
import HeroSection from "../../components/HeroSection";
import Registration from "../../components/Registration";
import ModernFacilities from "./ModernFacilities";
import HoursOfOperation from "./HoursOfOperation";

const PSI = () => {
  return (
    <>
      <HeroSection
        // backgroundImage={galleryHeroImg}
        breadcrumb="Home / PSI"
        align="left"
      />
      <Registration
        examName="PSI Online Testing"
        officialLink="https://www.psiexams.com/"
        title="Register for PSI Exams"
        description="Access secure certification exams through PSI’s official testing system."
      />
      <ModernFacilities />
      <HoursOfOperation />
    </>
  );
};

export default PSI;
