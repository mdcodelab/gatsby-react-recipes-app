import React from "react";
import { graphql, Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {BsClockHistory, BsClock, BsPeople} from "react-icons/bs";
import Layout from "../components/Layout";

function RecipeTemplate({data}) {
  console.log(data);
  const{title, cookTime, prepTime, servings, description: {description}, content, image}=data.contentfulRecipe;
  const pathToImage=getImage(image);
  const {ingredients, instructions, tags, tools}=content
  
  return (
    <Layout>
      <main className="page">
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

export default RecipeTemplate;
