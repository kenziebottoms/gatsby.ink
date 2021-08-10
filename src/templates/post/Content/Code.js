import React, { Fragment } from 'react'

import CodePen from '../../../components/CodePen'
import Script from '../../../elements/Script'

import githubLogo from '../../../images/github.svg'

const CodeContent = ({
  title,
  date,
  description,
  fullImage,
  codepenSlug,
  script,
  link,
  github,
}) => {
  return (
    <Fragment>
      {codepenSlug ?
        (
          <CodePen
            title={title}
            hash={codepenSlug}
          />
        ) :
        (
          <Fragment>
            {script ?
              (
                <Script
                  async={true}
                  src={script}
                />
              ) :
              (
                <img
                  src={fullImage}
                  alt={`${title} `}
                />
              )}
          </Fragment>
        )}
      <div className='caption'>
        <h3>{title}</h3>
        <p className='date'>{date.split('T')[0]}</p>
        <p
          className='body'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {link && (
          <p className='link'>
            <i className='material-icons'>link</i>
            <a
              href={link}
              target='blank'
            >
              {link}
            </a>
          </p>
        )}
        {github && (
          <p className='github'>
            <img
              src={githubLogo}
              alt='GitHub'
            />
            <a
              href={github}
              target='blank'
            >
              {github}
            </a>
          </p>
        )}
      </div>
    </Fragment>
  )
}

export default CodeContent
