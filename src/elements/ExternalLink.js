import React from 'react'

const ExternalLink = ({
  children,
  ...passThruProps
}) => (
  <a
    {...passThruProps}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </a>
)

export default ExternalLink
