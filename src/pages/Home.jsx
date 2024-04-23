import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Feature from "../components/feature/Feature";
import CardSection from "../components/cardsection/CardSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <CardSection />
    </div>
  );
};

export default Home;
