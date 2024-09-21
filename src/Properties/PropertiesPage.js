import React from 'react';
// import Preloader from '../Preloader';
import SubNavBar from '../Components/SubNavBar';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

import PropertiesSection from './PropertiesSection';
import Heading from '../Components/Heading';

export default function PropertiesPage() {
  return (
    <div>
      {/* <Preloader /> */}
      <SubNavBar />
      <NavBar />
      <Heading title={'Properties'} />
      <PropertiesSection />
      <Footer />
    </div>
  );
}
