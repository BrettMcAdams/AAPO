import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import CardSection from "../../components/CardSection/CardSection"
import "./Home.css";

const Home = () => {
  return <div className="home">
      <Navbar />
      <Hero />
      <CardSection />
  </div>;
};

export default Home;
