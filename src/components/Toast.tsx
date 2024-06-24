import React from 'react'
import { Snackbar, Alert } from '@mui/material'

interface ToastProps {
  isOpen: boolean
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}

export const Toast: React.FC<ToastProps> = ({ isOpen, handleClose }) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={10000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Alert
        onClose={handleClose}
        severity='error'
        variant='filled'
        sx={{ width: '100%' }}
      >
        Something went wrong! Please, try again!
      </Alert>
    </Snackbar>
  )
}
