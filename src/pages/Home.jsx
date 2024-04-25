import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
// import Feature from "../components/feature/Feature";
import CardSection from "../components/cardsection/CardSection";
import EmployCard from "../components/employcard/EmployCard";
import Footer from "../components/footer/Footer";
import JobCategory from "../components/jobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Feature /> */}
      <CardSection />
      <EmployCard />
      <JobCategory />
      <Footer />
    </div>
  );
};

export default Home;
