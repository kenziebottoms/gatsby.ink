import React from 'react'

import TechList from './TechList'
import JobDescription from './JobDescription'

const Job = ({
  classes,
  company,
  jobTitle,
  startDate,
  endDate,
  description,
  tech,
}) => (
  <article className={classes || ''}>
    <h3>{company}</h3>
    <h4>{jobTitle}</h4>
    <p className='date'>
      {startDate}{' — '}{endDate || 'present'}
    </p>
    <JobDescription description={description} />
    <TechList tech={tech} />
  </article>
)

export default Job
