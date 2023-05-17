import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"; //for dynamic images


  const query = graphql`
    query {
      allFile {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 200)
          }
        }
      }
    }
  `;

function Gallery() {
    const data=useStaticQuery(query);
    console.log(data);
  return (
    <div>
      
    </div>
  );
}

export default Gallery;

