import React, { Children } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../assets/css/main.css"

const Layout = ({children}) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
