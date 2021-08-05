import React from 'react'
import { Link } from 'gatsby'

import Page from '../../components/Page'

import './index.scss'

const NotFoundPage = () => (
  <Page id='not-found'>
    <div className='block'>
      <h3>
        This link is no good. <Link to='/'>Try the homepage?</Link>
      </h3>
    </div>
  </Page>
)

export default NotFoundPage
