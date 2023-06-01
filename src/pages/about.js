import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import SEO from "../components/SEO";
import styled from "styled-components";

const About = () => {
  const data = useStaticQuery(query);
  //console.log(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <SEO title="About"></SEO>
      <main className="page">
        <Wrapper className="about-page">
          <div className="about-page-article">
            <article>
              <h2>Discover Delicious Recipes with Us</h2>
              <p>
                We are a team of food enthusiasts who share a love for cooking
                and creating delicious recipes. Our goal is to provide our
                readers with a wide range of recipe options to suit all tastes
                and skill levels.
              </p>
              <p>
                We believe that cooking should be a fun and enjoyable experience
                for everyone, which is why we aim to make our recipes easy to
                follow and accessible. Whether you're a beginner or a seasoned
                chef, our recipes will inspire and encourage you to try new
                flavors and techniques.
              </p>
              <p>
                We hope that we bring joy and excitement to your cooking
                adventures!
              </p>
              <Link to="/contact" className="btn">
                Contact
              </Link>
            </article>
          </div>
          <StaticImage
            src="../assets/other_img/about.jpg"
            alt="about"
            className="about-img"
            placeholder="blurred" style={{borderRadius: "0.5rem", height: "450px"}}/>
        </Wrapper>

        <Section className="featured-recipes">
          <h5 className="featured-title">Look At These Awesome Recipes!</h5>
          <div className="featured-list">
            {data.allContentfulRecipe.nodes.map((recipe) => {
              const { id, title, image, prepTime, cookTime } = recipe;
              const slug = slugify(title, { lower: true });

              return (
                <Link key={id} to={`/${slug}`} className="featured-recipe">
                  <GatsbyImage
                    image={getImage(image)}
                    alt={title}
                    className="featured-recipe-img"
                  />
                  <h5>{title}</h5>
                  <p>
                    Prep: {prepTime} min | Cook: {cookTime} min
                  </p>
                </Link>
              );
            })}
          </div>
        </Section>
      </main>
    </Layout>
  );
};

const query = graphql`
  query {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  article {
    margin-right: 2rem;
  }

  article p {
    text-align: justify;
    margin-bottom: 0.8rem;
    line-height: 1.6rem;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 2rem;
    margin-bottom: 4rem;
    flex-direction: column;
    justify-content: center;

    article {
      margin-right: 0;
      margin-bottom: 2rem;
    }

    article a {
      display: none;
    }
  }
`;

const Section = styled.section`
  width: 90vw;
  margin: 3rem auto;

  .featured-title {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .featured-list {
    display: flex;
    justify-content: space-between;
  }

  .featured-recipe {
    box-shadow: var(--shadow-4);
    border-radius: 1rem;
  }

  .featured-recipe-img {
    width: 22rem;
    height: 17rem;
    border-radius: 0.5rem;
  }

  .featured-recipe h5 {
    text-align: left;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--grey-600);
  }

  .featured-recipe p {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 992px) {
    .featured-list {
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .featured-recipes {
      margin: 1rem auto;
    }

    .featured-recipe {
      margin: 0 auto;
      margin-bottom: 2rem;
      border-radius: 1rem;
      border: 3px solid transparent;
      width: 80%;
    }

    .featured-recipe-img {
      width: 100%;
      height: 16rem;
    }

    .featured-recipe h5 {
      text-align: left;
      margin: 0;
      padding: 0;
      padding: 0;
      margin-top: 1rem;
      font-weight: 600;
      font-size: 1rem;
    }
    .featured-recipe p {
      margin: 0;
      padding: 0.75rem 0;
    }
  }
`;


export default About;
