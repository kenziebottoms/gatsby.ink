import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import TileGrid from '../components/TileGrid'

import ExternalLink from '../elements/ExternalLink'

export const query = graphql`
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
}
`

const Art = ({ data }) => {
  return (
    <Page id='art'>
      <TileGrid
        edges={data.allGoogleSpreadsheetHomepageArt.edges}
        linkHead='art'
      >
        <blockquote className='commissions'>
          Kenzie is always happy to take commissions. It can be{' '}
          <strong>anything</strong>: sticker designs, Coke can sculptures,
          photorealistic pet portraits, tattoo designs, character sheets, or
          something even more adventurous.{' '}
          <ExternalLink href='mailto:kenziebottoms@gmail.com' >
            Email them!
          </ExternalLink>
        </blockquote>
      </TileGrid>
    </Page>
  )
}

export default Art
