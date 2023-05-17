import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { ne: "svg" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: BLURRED
              transformOptions: { grayscale: true }
            )
          }
        }
      }
    }
  `);
  console.log(data);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default Gallery;
