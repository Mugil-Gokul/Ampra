import React from "react";
import HeroSection from "../../components/HeroSection";
import ExamsOfferedHeroImg from "../../assets/GalleryHero.png";

const ExamsOfferedHero = () => {
  return (
    <HeroSection
      backgroundImage={ExamsOfferedHeroImg}
      breadcrumb="Home / Exams Offered"
      align="left"
    />
  );
};

export default ExamsOfferedHero;