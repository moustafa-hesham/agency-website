import React from 'react';
import Banner from './Banner';
import FeaturedSection from './FeaturedSection';
import VideoSection from './VideoSection';
import FunFacts from './FunFacts';
import BestDeals from './BestDeals';
import Properties from './Properties';
import Contact from './Contact';
import Footer from './Footer';
import Preloader from '../Preloader';
import SubNavBar from '../SubNavBar';
import NavBar from '../NavBar';

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
