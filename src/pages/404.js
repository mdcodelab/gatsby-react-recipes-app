import React from 'react';
import Layout from "../components/Layout";
import {Link} from "gatsby";
import SEO from "../components/SEO";
import styled from "styled-components";

const Error = () => {
  return (
    <Layout>
    <SEO title="Error"></SEO>
      <Wrapper className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
          <Link to="/">Back Home</Link>
        </section>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div `
height: calc()(1--vh - 10rem);
h1, h3 {
  text-align: center;
}
`;




export default Error;
