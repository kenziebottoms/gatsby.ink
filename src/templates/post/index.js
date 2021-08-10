import React from 'react'
import { Link } from '@reach/router'

import Page from '../../components/Page'
import LoadingIcon from '../../elements/LoadingIcon'

import Content from './Content'
import './index.scss'

const Post = ({
  pageContext: {
    postType,
    ...post
  },
}) => {
  return (
    <Page
      id='post'
      className={postType}
    >
      <Link
        className='back'
        to={`/${postType}`}
      >
        <i className='material-icons'>chevron_left</i>
        Back to {postType}
      </Link>
      {post ?
        (
          <Content
            type={postType}
            post={post}
          />
        ) :
          <LoadingIcon />}
    </Page>
  )
}

export default Post
