import React from 'react';
import Layout from '../components/Layout';
import styled from "styled-components"
import AllRecipes from '../components/AllRecipes';
import SEO from "../components/SEO";

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes"></SEO>
        <Main className="page">
            <AllRecipes></AllRecipes>
        </Main>
    </Layout>
  );
}

const Main= styled.main `
margin-top: 3rem;
@media (max-width: 992px) {
  margin-top: 5rem;
}
`;


export default Recipes;
