import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({birds}) => {
  return (
    <>
      <Navbar></Navbar>
      {birds}
      <Footer></Footer>
    </>
  );
}

export default Layout;
