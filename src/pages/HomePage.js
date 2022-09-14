import React from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProducts />
      <Contact />
    </main>
  );
};

export default HomePage;
