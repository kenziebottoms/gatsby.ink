import React, { Fragment } from 'react'

const ArtContent = ({
  title,
  date,
  description,
  fullImage,
}) => {
  return (
    <Fragment>
      <img
        src={fullImage}
        alt={title}
      />
      <div className='caption'>
        <h3>{title}</h3>
        <p className='date'>{date.split('T')[0]}</p>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </Fragment>
  )
}

export default ArtContent
