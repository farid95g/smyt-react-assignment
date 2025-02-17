import React from 'react'
import Grid from '@mui/material/Grid'
import type { Post } from '@smyt/types'
import { PostItem } from '@smyt/components'

interface PostListProps {
  posts: Post[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Grid
      container
      spacing={3}
    >
      {posts.map((post: Post) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={post.id}
        >
          <PostItem
            id={post.id}
            title={post.title}
            thumbnailUrl={post.thumbnailUrl}
          />
        </Grid>
      ))}
    </Grid>
  )
}
