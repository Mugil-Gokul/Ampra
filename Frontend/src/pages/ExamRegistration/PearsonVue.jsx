import React from "react";
import HeroSection from "../../components/HeroSection";
import Registration from "../../components/Registration";
import ModernFacilities from "./ModernFacilities";
import HoursOfOperation from "./HoursOfOperation";

const PearsonVue = () => {
  return (
    <>
      <HeroSection
        // backgroundImage={galleryHeroImg}
        breadcrumb="Home / Pearson VUE"
        align="left"
      />
      <Registration
      examName="Pearson VUE"
      officialLink="https://home.pearsonvue.com/"
      title="Register for Pearson VUE Exams"
      description="Book certification and licensure exams through Pearson VUE's official platform."
      />
      <ModernFacilities />
      <HoursOfOperation />
    </>
  );
};

export default PearsonVue;