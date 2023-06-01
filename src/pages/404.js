import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
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
          <Link to="/" className="btn">
            Back Home
          </Link>
        </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 10rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1,
  h3 {
    text-align: center;
  }
  a {
    display: inline-block;
    
    margin-top: 2rem;
  }
`;

export default Error;
