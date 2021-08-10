import React from 'react'

import ArtContent from './Art'
import CodeContent from './Code'

const Content = ({
  type,
  post,
}) => {
  const Component = type === 'code' ? CodeContent : ArtContent
  return <Component {...post}/>
}

export default Content
