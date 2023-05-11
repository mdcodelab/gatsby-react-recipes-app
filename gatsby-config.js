/**
 * /**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/img`,
      },
    }, 
  ],
};
