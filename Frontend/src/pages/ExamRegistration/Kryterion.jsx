import React from "react";
import HeroSection from "../../components/HeroSection";
import Registration from "../../components/Registration";
import ModernFacilities from "./ModernFacilities";
import HoursOfOperation from "./HoursOfOperation";

const Kryterion = () => {
  return (
    <>
      <HeroSection
        // backgroundImage={galleryHeroImg}
        breadcrumb="Home / Kryterion"
        align="left"
      />
      <Registration
        examName="Kryterion"
        officialLink="https://www.kryterion.com/"
        title="Register for Kryterion Exams"
        description="Secure and scalable online testing for global certifications."
      />
      <ModernFacilities />
      <HoursOfOperation />
    </>
  );
};

export default Kryterion;
