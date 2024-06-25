import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import type { Post } from '@smyt/types'

type PostProps = Omit<Post, 'albumId' | 'url'>

export const PostItem: React.FC<PostProps> = ({ id, title, thumbnailUrl }) => {
  return (
    <RouterLink
      to={`/post/${id}`}
      style={{ all: 'unset', cursor: 'pointer' }}
    >
      <Card sx={{ height: '100%' }}>
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
    </RouterLink>
  )
}
