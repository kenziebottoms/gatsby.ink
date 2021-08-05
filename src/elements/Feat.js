import React from 'react'

const Feat = ({
  icon,
  title,
  description,
}) => (
  <div className='achievement'>
    <i className='material-icons'>{icon}</i>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
)

export default Feat
