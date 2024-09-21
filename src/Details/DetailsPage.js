import React from 'react';
import Heading from '../Components/Heading';
import Footer from '../Components/Footer';
import SubNavBar from '../Components/SubNavBar';
import NavBar from '../Components/NavBar';
import PropertyDetailItem from './PropertyDetailItem';
import BestDeal from './BestDeal';

export default function DetailsPage() {
  return (
    <div>
      <SubNavBar />
      <NavBar />
      <Heading title={'Single Property'} />
      <PropertyDetailItem />
      <BestDeal />
      <Footer />
    </div>
  );
}
