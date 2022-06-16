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
      <Feature />
      <GallerySection />
      <Event />
      <Compliments />
      <Footer />
    </div>
  );
};

export default Home;
