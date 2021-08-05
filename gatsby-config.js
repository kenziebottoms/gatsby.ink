module.exports = {
  siteMetadata: {
    siteUrl: 'https://kenzie.ink',
    title: 'kenzie.ink',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-70354602-1',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Assistant:wght@300;400',
          'Source+Code+Pro:wght@400',
          'Material+Icons',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
  ],
}
