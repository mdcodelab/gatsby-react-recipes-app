/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "The Recipes Room",
    description: "Nice and clean recipes site",
    author: "mdcodelab",
    person: { name: "mihaela", location: "remote" },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "mihaela", location: "remote" },
      { name: "john", location: "boston" },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `t3wqqju9q5n4`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500,600`,
          `sans-serif\:300,400,400i,500, 600, 700`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`
  ],
};
