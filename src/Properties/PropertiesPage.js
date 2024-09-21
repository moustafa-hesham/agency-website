import React from 'react';
// import Preloader from '../Preloader';
import SubNavBar from '../Components/SubNavBar';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Heading from './Heading';
import PropertiesSection from './PropertiesSection';

export default function PropertiesPage() {
  return (
    <div>
      {/* <Preloader /> */}
      <SubNavBar />
      <NavBar />
      <Heading />
      <PropertiesSection />
      <Footer />
    </div>
  );
}
