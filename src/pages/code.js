import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import TileGrid from '../components/TileGrid'

export const query = graphql`
query {
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
`

const Code = ({ data }) => {
  return (
    <Page id='code'>
      <TileGrid
        edges={data.allGoogleSpreadsheetHomepageCode.edges}
        linkHead='code'
      />
    </Page>
  )
}

export default Code
