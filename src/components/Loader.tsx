import React from 'react'
import { Box, CircularProgress } from '@mui/material'

export const Loader: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
}
