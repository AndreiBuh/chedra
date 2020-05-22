require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Chedra Tax ITP",
    description:
      "Chedra Tax ITP - inspectie tehnica periodica, vulcanizare, incarcare freon, Ploiesti, Ciorani, Floresti",
    siteUrl: "https://chedra-gatsby.netlify.app/",
    image: "logo.png",
    twitterUsername: "@andrei_buhus",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chedra Tax`,
        short_name: `Chedra Tax`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2366c`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.chedratax.ro/",
        sitemap: "https://www.chedratax.ro/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
