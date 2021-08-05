import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import ExternalLink from '../elements/ExternalLink'

const Home = () => (
  <Page id='home'>
    <div
      id='bio'
      className='block wide'
    >
      <p>
        Kenzie Bottoms is a feminist, anti-racist, artist, and developer
        based in Nashville, which is the original homeland of the{' '}
        <ExternalLink href='http://www.naiatn.org/support/naia-circle-of-life-donations/'>
          Cherokee, Chickasaw, Shawnee, and Yuchi tribal nations
        </ExternalLink>.{' '}
        <Link to='/pronouns'>They</Link> are passionate about making
        all spaces, professional and otherwise, safe for women and nonbinary
        people, people of color, trans people, disabled people, and
        neurodivergent people.
      </p>
      <p>
        They are a jammer for the{' '}
        <ExternalLink href='https://www.nashvillerollerderby.com/'>
          Nashville Roller Derby
        </ExternalLink>{' '}
        Brawl Stars and skate under the name{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Ellen_Ripley'>
          Ellen R.I.P.ley
        </ExternalLink>
        . They are a full-stack Node.js{' '}
        <ExternalLink href='http://nashvillesoftwareschool.com/'>
          Nashville Software School
        </ExternalLink>{' '}
        graduate, and they are currently cleaning up, maintaining and
        building onto a large React Redux codebase with{' '}
        <ExternalLink href='https://www.razorsync.com/'>
          RazorSync
        </ExternalLink>
        .
      </p>
    </div>
    <Link
      className='block'
      to='/art'
    >
      <i className='material-icons'>color_lens</i>
      Art
    </Link>
    <Link
      className='block'
      to='/code'
    >
      <i className='material-icons'>code</i>
      Code
    </Link>
    <Link
      className='block'
      to='/resume'
    >
      <i className='material-icons'>assignment_ind</i>
      Resume
    </Link>
    <Link
      className='block'
      to='/links'
    >
      <i className='material-icons'>launch</i>
      Links
    </Link>
    <Link
      className='block wide'
      to='/achievements'
    >
      <i className='material-icons'>stars</i>
      Achievements
    </Link>
  </Page>
)

export default Home
