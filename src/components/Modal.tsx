import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { ModalContext } from '@smyt/context'
import { ModalActionTypes } from '@smyt/utils'
import React, { useContext } from 'react'

interface RetryProps {
  error: string
  retry: () => void
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<
      unknown,
      string | React.JSXElementConstructor<unknown>
    >
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction='up'
      ref={ref}
      {...props}
    />
  )
})

export const Retry: React.FC<RetryProps> = ({ error, retry }) => {
  const { isOpen, toggleModalVisibility } = useContext(ModalContext)!

  const handleClose = () => {
    toggleModalVisibility(ModalActionTypes.HIDE)
  }

  const retryFailedRequest = () => retry()

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>
        <Typography
          variant='h4'
          gutterBottom
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px'
          }}
        >
          {error}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          Something went wrong! Please, try again...
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={retryFailedRequest}>Retry</Button>
      </DialogActions>
    </Dialog>
  )
}
