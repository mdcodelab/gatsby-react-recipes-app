import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
  query {
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200, height: 150)
        }
      }
    }
  }
`;

function Gallery() {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  console.log(data);

  return (
    <Wrapper>
      <h2>My gallery</h2>
      <div>
        {nodes.map((image, index) => (
          <article key={index}>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}alt={image.name} className="gallery-img"/>
            <p>{image.name}</p>
          </article>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    text-align: center;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
  article {
    margin-left: 1rem;
  }
  .gallery-img {
    border-radius: 3px;
  }
`;

export default Gallery;
