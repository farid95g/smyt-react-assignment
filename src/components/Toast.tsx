import React, { useCallback, useContext } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { ToastContext } from '@smyt/context'
import { ToastVisibility } from '@smyt/utils'

export const Toast: React.FC = () => {
  const { isOpen, toggleIsOpen } = useContext(ToastContext)!

  const handleClose = useCallback(
    (_event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }

      toggleIsOpen(ToastVisibility.HIDE)
    },
    []
  )

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={7000}
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
