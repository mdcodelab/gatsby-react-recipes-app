import React from 'react';
import {Helmet} from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

function SEO() {
  return <Helmet title="homE" defer={false} />;
}

export default SEO;
