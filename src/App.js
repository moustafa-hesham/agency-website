import React from 'react';
import Preloader from './Preloader';
import SubNavBar from './SubNavBar';
import NavBar from './NavBar';
import Banner from './Home/Banner';
import FeaturedSection from './Home/FeaturedSection';
import VideoSection from './Home/VideoSection';
import FunFacts from './Home/FunFacts';
import BestDeals from './Home/BestDeals';
import Properties from './Home/Properties';
import Contact from './Home/Contact';
import Footer from './Home/Footer';

export default function App() {
  return (
    <div>
      <Preloader />
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
