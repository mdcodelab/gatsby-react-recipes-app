import React from 'react';
import {Helmet} from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

function SEO({title, description}) {
  return <Helmet title={title} meta={[{name: `description`, content: description}]}
   htmlAttributes={{lang: "eng"}}
>
    
  </Helmet>;
}

export default SEO;
