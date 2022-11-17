import React from "react";
import Hero from '../components/Hero/Hero'
import AboutUs from "../components/AboutUs/AboutUs";
import Collection from '../components/Collection/Collection'
import FAQ from '../components/FAQ/Faq'
import Mint from '../components/Mint/Mint'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <Mint/>
      <Collection/>
      <AboutUs/>
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Home;
