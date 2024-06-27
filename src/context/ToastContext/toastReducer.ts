import type { ToastAction } from '@smyt/types'
import { ToastActionTypes } from '@smyt/utils'

interface ToastState {
  message?: string
  isOpen: boolean
}

export const toastReducer = (state: ToastState, action: ToastAction) => {
  const { type, payload } = action

  switch (type) {
    case ToastActionTypes.SHOW: {
      return {
        ...state,
        message: payload,
        isOpen: true
      }
    }

    case ToastActionTypes.HIDE: {
      return {
        ...state,
        message: '',
        isOpen: false
      }
    }

    default: {
      return state
    }
  }
}
