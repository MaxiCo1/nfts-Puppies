import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import AboutUs from "../components/AboutUs/AboutUs";
import Collection from '../components/Collection/Collection'
import FAQ from '../components/FAQ/Faq'
import Mint from '../components/Mint/Mint'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Collection/>
      <Mint/>
      <AboutUs/>
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Home;
