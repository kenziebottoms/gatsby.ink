import React, { Fragment } from 'react'

import Tile from './Tile'
import LoadingIcon from '../../elements/LoadingIcon'

import './index.scss'

const TileGrid = ({
  id,
  linkHead,
  children,
  edges = [],
}) => (
  <div
    id={id}
    className='tileGrid'
  >
    {edges.length === 0 ?
      <LoadingIcon /> :
      (
        <Fragment>
          {children}
          {edges.map(({ node }) => (
            <Tile
              key={node.slug}
              linkHead={linkHead}
              {...node}
            />
          ))}
        </Fragment>
      )}
  </div>
)

export default TileGrid
