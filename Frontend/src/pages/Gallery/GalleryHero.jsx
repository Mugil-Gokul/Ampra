import React from "react";
import HeroSection from "../../components/HeroSection";
import galleryHeroImg from "../../assets/GalleryHero.png";

const GalleryHero = () => {
  return (
    <HeroSection
      backgroundImage={galleryHeroImg}
      breadcrumb="Home / Gallery"
      align="left"
    />
  );
};

export default GalleryHero;