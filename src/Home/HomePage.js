import React from 'react';
import Banner from './Banner';
import FeaturedSection from './FeaturedSection';
import VideoSection from './VideoSection';
import FunFacts from './FunFacts';
import BestDeals from './BestDeals';

import Contact from './Contact';

import SubNavBar from '../Components/SubNavBar';
import NavBar from '../Components/NavBar';
import Properties from './Properties';
import Footer from '../Components/Footer';

export default function HomePage() {
  return (
    <div>
      {/* <Preloader /> */}
      <SubNavBar />
      <NavBar />
      <Banner />
      <FeaturedSection />
      <VideoSection />
      <FunFacts />
      <BestDeals />
      <Properties />
      <Contact />
      <Footer />
    </div>
  );
}
