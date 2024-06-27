import React, { useCallback, useContext } from 'react'
import { Snackbar, Alert, Typography } from '@mui/material'
import { ToastContext } from '@smyt/context'
import { ToastActionTypes } from '@smyt/utils'

export const Toast: React.FC = () => {
  const { message, isOpen, toggleIsOpen } = useContext(ToastContext)!

  const handleClose = useCallback(
    (_event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }

      toggleIsOpen(ToastActionTypes.HIDE)
    },
    []
  )

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      className='toast'
    >
      <Alert
        onClose={handleClose}
        severity='error'
        variant='filled'
        sx={{ width: '100%' }}
      >
        <Typography
          variant='h6'
          gutterBottom
        >
          {message}
        </Typography>
        <Typography
          variant='subtitle1'
          gutterBottom
        >
          Something went wrong! Please, try again!
        </Typography>
      </Alert>
    </Snackbar>
  )
}
