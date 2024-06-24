import { ToastAction } from '@smyt/types'
import { ToastVisibility } from '@smyt/utils'

interface ToastState {
  isOpen: boolean
}

export const toastReducer = (state: ToastState, action: ToastAction) => {
  const { type } = action

  switch (type) {
    case ToastVisibility.SHOW: {
      return {
        ...state,
        isOpen: true
      }
    }

    case ToastVisibility.HIDE: {
      return {
        ...state,
        isOpen: false
      }
    }

    default: {
      return state
    }
  }
}
