exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allGoogleSpreadsheetHomepageArt {
        edges {
          node {
            title
            slug
            date
            description
            fullImage
            thumbnail
          }
        }
      }
      allGoogleSpreadsheetHomepageCode {
        edges {
          node {
            title
            slug
            date
            description
            fullImage
            thumbnail
            codepenSlug
            script
            link
            github
          }
        }
      }
    }
  `)
  const component = require.resolve('./src/templates/post/index.js')
  data.allGoogleSpreadsheetHomepageArt.edges.forEach(({ node }) => {
    actions.createPage({
      path: `art/${node.slug}`,
      component,
      context: { postType: 'art', ...node },
    })
  })
  data.allGoogleSpreadsheetHomepageCode.edges.forEach(({ node }) => {
    actions.createPage({
      path: `code/${node.slug}`,
      component,
      context: { postType: 'code', ...node },
    })
  })
}
