import React from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
import WhyInsights from "../components/WhyInsights";
import Serves from "../components/Serves";
import CaseStudy from "../components/CaseStudy";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <WhyInsights />
      <Serves />
      <CaseStudy />
      <NewsLetter />
      <Footer />
      <CopyRights />
    </>
  );
};

export default Home;
