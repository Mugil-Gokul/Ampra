import React from "react";
import HeroSection from "../../components/HeroSection";
import ModernFacilities from "./ModernFacilities";
import HoursOfOperation from "./HoursOfOperation";
import Registration from "../../components/Registration";

const IELTS = () => {
  return (
    <>
      <HeroSection
        // backgroundImage={galleryHeroImg}
        breadcrumb="Home / IELTS"
        align="left"
      />
      <Registration examName="IELTS" officialLink="https://www.ielts.org/" />
      <ModernFacilities />
      <HoursOfOperation />
    </>
  );
};

export default IELTS;
