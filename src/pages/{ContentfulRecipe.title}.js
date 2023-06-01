import React from "react";
import { graphql, Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {BsClockHistory, BsClock, BsPeople} from "react-icons/bs";
import Layout from "../components/Layout";
import styled from "styled-components";
import SEO from "../components/SEO"

function RecipeTemplate({data}) {
  console.log(data);
  const{title, cookTime, prepTime, servings, description: {description}, content, image}=data.contentfulRecipe;
  const pathToImage=getImage(image);
  const {ingredients, instructions, tags, tools}=content
  
  return (
    <Layout> 
      <SEO title={title}></SEO>
      <main className="page">
        <Wrapper>
          <div className="recipe-page">
            <section className="recipe-hero">
              <GatsbyImage image={pathToImage} alt={title} className="about-img"></GatsbyImage>
              <article className="recipe-info">
                <h2>{title}</h2>
                <p style={{ textAlign: "justify" }}>{description}</p>
                <div className="recipe-icons">
                  <article>
                    <BsClock></BsClock>
                    <h5>Prep Time</h5>
                    <p>{prepTime} min.</p>
                  </article>
                  <article>
                    <BsClockHistory></BsClockHistory>
                    <h5>Cook Time</h5>
                    <p>{cookTime} min.</p>
                  </article>
                  <article>
                    <BsPeople></BsPeople>
                    <h5>Servings</h5>
                    <p>{servings}</p>
                  </article>
                </div>
                <p className="recipe-tags">
                  Tags:{" "}
                  {tags.map((tag, index) => {
                    return (
                      <Link to={`/${tag}`} key={index}>
                        {tag}
                      </Link>
                    );
                  })}
                </p>
              </article>
            </section>

            <Section className="general" style={{margin: "2rem auto"}}>
              <article className="first-column">
                <h4>Instructions</h4>
                {instructions.map((item, index) => {
                  return (
                    <div className="single-instruction" key={index}>
                      <header>
                        <p>Step: {index + 1}</p>
                        <div></div>
                      </header>
                      <p className="instructionsContent">{item}</p>
                    </div>
                  );
                })}
              </article>
              <article className="second-column">
                <div>
                  <h4>Ingredients</h4>
                  {ingredients.map((item, index) => {
                    return (
                      <p key={index} className="single-ingredient">
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div>
                  <h4>Tools</h4>
                  {tools.map((item, index) => {
                    return (
                      <p key={index} className="single-tool">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </article>
            </Section>
          </div>
        </Wrapper>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      description {description}
      servings
      content {
        ingredients
        instructions
        tags
        tools
      }
      image {
        gatsbyImageData
      }
    }
  }
`;

const Wrapper = styled.div`
  .recipe-hero {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 3rem;
  }
  .recipe-hero .about-img {
    height: 400px;
    border-radius: 0.2rem;
  }
  .recipe-hro .recipe-info {
    margin: 0 auto;
  }
  .recipe-icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 2rem 0;
    text-align: center;
  }
  .recipe-icons svg {
    font-size: 1.5rem;
  }
  .recipe-icons h5,
  .recipe-icons p {
    margin-bottom: 0;
    font-size: 0.85em;
  }
  .recipe-icons h5 {
    font-weight: 600;
  }
  .recipe-icons p {
    color: var(--grey-800);
  }
  .recipe-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.7em;
    font-weight: 600;
  }

  .recipe-tags a {
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    color: var(--white);
    padding: 0.05rem 0.5rem;
    margin: 0 0.25rem;
    text-transform: capitalize;
  }
  @media only screen and (min-width: 992px) {
    .recipe-info h2 {
      text-align: center;
    }
    .recipe-hero {
      grid-template-columns: 4fr 5fr;
      align-items: center;
    }
  }
`;

const Section = styled.section`
  display: flex;

  margin: 0 auto;
  margin-top: 2rem;
  justify-content: space-between;

  .first-column {
    width: 70%;
  }

  .second-column {
    width: 25%;
  }

  .single-instruction header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: center;
  }

  .single-instruction header p {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--primary-500);
    margin-bottom: 0;
  }

  .single-instruction header div {
    height: 1px;
    background: var(--grey-500);
    width: 95%;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: stretch;

    .first-column,
    .second-column {
      width: 80%;
      margin: 0 auto;
    }
    .second-column {
      margin-top: 1rem;
    }
  }
  .single-instruction header div {
    width: 100%;

  }
`;





export default RecipeTemplate;


