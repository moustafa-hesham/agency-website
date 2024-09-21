import React from 'react';
import SubNavBar from '../Components/SubNavBar';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Heading from '../Components/Heading';
import ContactDetails from './ContactDetails';
import Map from './Map';

export default function ContactPage() {
  return (
    <div>
      <SubNavBar />
      <NavBar />
      <Heading title={'Contact Us'} />
      <ContactDetails />
      <Map />
      <Footer />
    </div>
  );
}
