import React from 'react'

import icon from './loading.svg'

import './index.scss'

const LoadingIcon = () => (
  <div id='loading'>
    <img
      src={icon}
      alt='Loading...'
    />
  </div>
)

export default LoadingIcon
