import React from "react";
import HeroSection from "../components/HeroSection";
import Organizers from "../components/Organizers";
import NavBar from "./NavBar";
const Home = () => {
  return (
    <>
      <HeroSection className="mt-5" />
      <Organizers />
    </>
  );
};

export default Home;
