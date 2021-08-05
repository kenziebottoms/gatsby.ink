import React, { Fragment } from 'react'

import Sidebar from '../Sidebar'
import Copyright from '../../elements/Copyright'

const Page = ({
  children,
  id,
  className,
}) => (
  <Fragment>
    <Sidebar />
    <div id='content'>
      <div
        id={id}
        className={className}
      >
        {children}
        <Copyright />
      </div>

    </div>
  </Fragment>
)

export default Page
