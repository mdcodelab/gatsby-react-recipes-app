import React from 'react';
import {Link} from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const RecipesList = ({recipes=[]}) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const{id, title, image, prepTime, cookTime}=recipe
        return <Link to={`/${title}`} key={id} className="recipe">
        <div className="recipe-content">
            <GatsbyImage image={getImage(image.gatsbyImageData)} className="recipe-img" alt={title}></GatsbyImage>
            {title}
            <p>Prep: {prepTime} min | Cook: {cookTime} min</p>
            </div>
        </Link>
      })}
    </div>
  );
}

export default RecipesList;

