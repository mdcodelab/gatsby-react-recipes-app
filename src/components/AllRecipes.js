import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 200
            placeholder: TRACED_SVG
          )
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  console.log(data);
  const recipes = data.allContentfulRecipe.nodes;
  console.log(recipes); //array of objects

  return (
    <Wrapper className="recipes-container">
      <TagsList recipes={recipes}></TagsList>
      <RecipesList recipes={recipes}></RecipesList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media only screen and (min-width: 992px) {
    display: flex;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 2rem;
    justify-content: center;
  }
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-bottom: 3rem;
    margin-top: -3rem;
  }
`;

export default AllRecipes;
