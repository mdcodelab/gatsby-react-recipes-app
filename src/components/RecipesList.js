import React from 'react';
import {Link} from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';


const RecipesList = ({recipes=[]}) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const{id, title, image, prepTime, cookTime}=recipe
        const slug=slugify(title, {lower: true})
        return <Link to={`/${slug}`} key={id} className="recipe">
        <div className="recipe-content">
            <GatsbyImage image={getImage(image.gatsbyImageData)} className="recipe-img" alt={title}></GatsbyImage>
            <h5>{title}</h5>
            <p>Prep: {prepTime} min | Cook: {cookTime} min</p>
            </div>
        </Link>
      })}
    </div>
  );
}

export default RecipesList;

