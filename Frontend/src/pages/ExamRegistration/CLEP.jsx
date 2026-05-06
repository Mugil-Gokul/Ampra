import React from "react";
import Registration from "../../components/Registration";
import HeroSection from "../../components/HeroSection";
import ModernFacilities from "./ModernFacilities";
import HoursOfOperation from "./HoursOfOperation";

const CLEP = () => {
  return (
    <>
      <HeroSection
        // backgroundImage={galleryHeroImg}
        breadcrumb="Home / CLEP"
        align="left"
      />
      <Registration
        examName="CLEP"
        officialLink="https://clep.collegeboard.org/"
        title="Register for CLEP Exams"
        description="Earn college credits by proving your subject knowledge."
      />
      <ModernFacilities />
      <HoursOfOperation />
    </>
  );
};

export default CLEP;
