import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import setUpTags from "../utils/setUpTags";

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;
console.log(query);
const Tags = () => {
  const { allContentfulRecipe } = useStaticQuery(query);
  const sortTags = setUpTags(allContentfulRecipe.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {sortTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link key={index} className="tag" to={`/${text}`}>
                  <p>{text}</p>
                  <p>{value} recipes</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Tags;
