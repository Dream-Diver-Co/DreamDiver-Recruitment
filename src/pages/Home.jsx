import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import CardSection from "../components/cardsection/CardSection";
import EmployCard from "../components/employcard/EmployCard";
import Footer from "../components/footer/Footer";
import JobCategory from "../components/jobCategory/JobCategory";
import AboutUs from "../components/aboutUs/AboutUs";
import Services from "../components/service/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardSection />
      <Services />
      <AboutUs />
      <EmployCard />
      <JobCategory />
      <Footer />
    </div>
  );
};

export default Home;
