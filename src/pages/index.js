import * as React from "react"
import {Link} from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";


export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <h1>hello from home page</h1>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div `
`;
