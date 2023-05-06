import React from 'react';
import Layout from '../components/Layout';
import styled from "styled-components";

const about = () => {
  return (
    <Layout>
        <Wrapper>
          <h1>About page</h1>
        </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
background: red;
`;

export default about;
