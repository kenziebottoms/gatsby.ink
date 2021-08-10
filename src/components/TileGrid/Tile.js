import React from 'react'
import { Link } from '@reach/router'

import './Tile.scss'

const Tile = ({
  linkHead,
  slug,
  thumbnail,
  title,
  date,
}) => (
  <div
    className={`${linkHead} tile`}
    key={slug}
    style={{ backgroundImage: `url(${thumbnail})` }}
  >
    <Link to={`${linkHead}/${slug}`}>
      <div className='overlay'>
        <h3>{title}</h3>
        <div className='date'>{date.split('T')[0]}</div>
      </div>
    </Link>
  </div>
)

export default Tile
