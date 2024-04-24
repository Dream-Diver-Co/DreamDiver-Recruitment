import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
// import Feature from "../components/feature/Feature";
import CardSection from "../components/cardsection/CardSection";
import EmployCard from "../components/employcard/EmployCard";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Feature /> */}
      <CardSection />
      <EmployCard />
    </div>
  );
};

export default Home;
