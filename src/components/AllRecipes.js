import React from 'react';
import TagsList from './TagsList';
import RecipesList from './RecipesList';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 200, placeholder: TRACED_SVG)
        }
      }
    } } 
`;


const AllRecipes = () => {
    const data = useStaticQuery(query);
    console.log(data);
    const recipes=data.allContentfulRecipe.nodes;
    console.log(recipes);  //array of objects

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes}></TagsList>
      <RecipesList recipes={recipes}></RecipesList>
    </section>
  );
}

export default AllRecipes;
