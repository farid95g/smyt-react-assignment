import { Button, Typography } from '@mui/material'
import React from 'react'

interface RetryProps {
  error: string
  retryFailedRequest: () => void
}

export const Retry: React.FC<RetryProps> = ({ error, retryFailedRequest }) => {
  return (
    <Typography
      variant='h3'
      gutterBottom
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px'
      }}
    >
      {error}
      <Button
        variant='contained'
        size='large'
        onClick={retryFailedRequest}
      >
        Retry request
      </Button>
    </Typography>
  )
}
