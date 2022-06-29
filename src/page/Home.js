import React from "react";
import {
  Navbar,
  Hero,
  Feature,
  GallerySection,
  Event,
  Compliments,
  Footer,
} from "../Components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Compliments />
      <GallerySection />
      <Event />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
