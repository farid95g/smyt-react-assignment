import React from 'react'
import { Box, CircularProgress } from '@mui/material'

export const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100% - 4rem)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 2
      }}
    >
      <CircularProgress size={100} />
    </Box>
  )
}
