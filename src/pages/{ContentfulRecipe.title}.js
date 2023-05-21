import React from "react";
import { graphql} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {BsClockHistory, BsClock, BsPeople} from "react-icons/bs";
import { useStaticQuery } from "gatsby";

function RecipeTemplate({data}) {
  console.log(data);
  const{title, cookTime, prepTime, servings, description: {description}, content, image}=data.contentfulRecipe;
  const pathToImage=getImage(image);
  const {ingredients, instructions, tags, tools}=content
  
  return (
    <main className="page">
      <div className="recipe-page">
        <h2>{title}</h2>
      </div>
    </main>
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
