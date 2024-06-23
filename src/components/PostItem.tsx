import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea
} from '@mui/material'
import type { Post } from '@smyt/types'

type PostProps = Pick<Post, 'title' | 'thumbnailUrl'>

export const PostItem: React.FC<PostProps> = ({ title, thumbnailUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          height='160'
          image={thumbnailUrl}
          alt={title}
        />
        <CardContent sx={{ height: 'calc(100% - 160px)' }}>
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            sx={{ fontSize: '20px' }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
