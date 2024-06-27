import { ModalAction } from '@smyt/types'
import { ModalActionTypes } from '@smyt/utils'

interface ModalState {
  isOpen: boolean
}

export const modalReducer = (state: ModalState, action: ModalAction) => {
  const { type } = action

  switch (type) {
    case ModalActionTypes.SHOW: {
      return {
        ...state,
        isOpen: true
      }
    }

    case ModalActionTypes.HIDE: {
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
