import React from 'react'
import { Link } from 'gatsby'

import Logo from '../../elements/Logo'

import './index.scss'

const routes = [
  {
    name: 'home',
    path: '/',
    icon: false,
  },
  {
    name: 'art',
    path: '/art',
    icon: 'color_lens',
  },
  {
    name: 'code',
    path: '/code',
    icon: 'code',
  },
  {
    name: 'resume',
    path: '/resume',
    icon: 'assignment_ind',
  },
  {
    name: 'feats',
    path: '/achievements',
    icon: 'stars',
  },
  {
    name: 'links',
    path: '/links',
    icon: 'launch',
  },
]

const Sidebar = () => (
  <ul id='sidebar'>
    {routes.map((route) => (
      <li key={route.name}>
        <Link
          to={route.path}
          getProps={({ isCurrent }) => ({
            className: isCurrent ? 'active' : '',
          })}
        >
          {route.icon ?
            <i className='material-icons'>{route.icon}</i> :
            <Logo link={false} />}
          <label>{route.name}</label>
        </Link>
      </li>
    )
    )}
  </ul>
)

export default Sidebar
