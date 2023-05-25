import React from 'react';
import Layout from '../components/Layout';
import styled from "styled-components"
import AllRecipes from '../components/AllRecipes';

const Recipes = () => {
  return (
    <Layout>
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
