import type { ToastAction } from '@smyt/types'
import { ToastVisibility } from '@smyt/utils'

interface ToastState {
  message?: string
  isOpen: boolean
}

export const toastReducer = (state: ToastState, action: ToastAction) => {
  const { type, payload } = action

  switch (type) {
    case ToastVisibility.SHOW: {
      return {
        ...state,
        message: payload,
        isOpen: true
      }
    }

    case ToastVisibility.HIDE: {
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
