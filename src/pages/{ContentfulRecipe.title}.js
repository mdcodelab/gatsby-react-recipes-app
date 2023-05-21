import React from "react";
import { graphql, Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {BsClockHistory, BsClock, BsPeople} from "react-icons/bs";
import Layout from "../components/Layout";
import styled from "styled-components";

function RecipeTemplate({data}) {
  console.log(data);
  const{title, cookTime, prepTime, servings, description: {description}, content, image}=data.contentfulRecipe;
  const pathToImage=getImage(image);
  const {ingredients, instructions, tags, tools}=content
  
  return (
    <Layout>
      <main className="page">
        <Wrapper>
          <div className="recipe-page">
            <section className="recipe-hero">
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="about-img"
              ></GatsbyImage>
              <article className="recipe-info">
                <h2>{title}</h2>
                <p>{description}</p>
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

            <section className="recipe-content">
              <article>
                <h4>Instructions</h4>
                {instructions.map((item, index) => {
                  return (
                    <div className="single-instruction">
                      <header>
                        <p>Step: {index + 1}</p>
                        <div></div>
                      </header>
                      <p>{item}</p>
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
            </section>
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
    gap: 3rem;
  }
  .recipe-hero .about-img {
    height: 400px;
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
  @media screen and (min-width: 992px) {
    .recipe-hero {
      grid-template-columns: 4fr 5fr;
      align-items: center;
    }
  }
  .recipe-content {
    padding: 3rem 0;
    display: grid;
    gap: 2rem 5rem;
  }
  @media screen and (min-width: 992px) {
    .recipe-content {
      grid-template-columns: 2fr 1fr;
    }
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
  }

  .second-column {
    display: grid;
    row-gap: 2rem;
  }

  .single-ingredient {
    border-bottom: 1px solid var(--grey-500);
    padding-bottom: 0.75rem;
  }
  .single-tool {
    border-bottom: 1px solid var(--grey-500);
    padding-bottom: 0.75rem;
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default RecipeTemplate;
