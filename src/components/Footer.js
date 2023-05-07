import React from 'react';


const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span style={{color: "#bc8f8f"}}>The Recipes Room </span>
        Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  );
}

export default Footer;
