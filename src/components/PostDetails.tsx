import React from 'react'
import { Typography } from '@mui/material'
import { Post } from '@smyt/types'

type PostDetailsProps = Pick<Post, 'title' | 'url'>

export const PostDetails: React.FC<PostDetailsProps> = ({ title, url }) => {
  return (
    <div>
      <Typography
        variant='h2'
        gutterBottom
      >
        {title}
      </Typography>
      <img
        src={url}
        alt={title}
      />
    </div>
  )
}
