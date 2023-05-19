import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";

const About = () => {
  const data = useStaticQuery(query);
  console.log(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Discover Delicious Recipes with Us</h2>
            <p>
              We are a team of food enthusiasts who share a love for cooking and
              creating delicious recipes. Our goal is to provide our readers
              with a wide range of recipe options to suit all tastes and skill
              levels.
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
          <StaticImage
            src="../assets/other_img/about.jpg"
            alt="about"
            className="about-img"
            placeholder="blurred"
          />
        </section>

        <section className="featured-recipes">
          <h5>Look At These Awesome Recipes!</h5>
          <div className="featured-list">
            {data.allContentfulRecipe.nodes.map((recipe) => {
              const { id, title, image, prepTime, cookTime } = recipe;
              return (
                <Link key={id} to={`/recipes/${title}`} className="recipe">
                  <GatsbyImage image={getImage(image)} alt={title} className="recipe-img"/>
                  <h6>{title}</h6>
                  <p>
                    Prep: {prepTime} | Cook: {cookTime}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
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

export default About;
