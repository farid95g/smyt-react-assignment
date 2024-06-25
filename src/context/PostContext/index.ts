import { createContext } from 'react'
import type { PostContextType } from '@smyt/types'

export const PostContext = createContext<PostContextType | null>(null)
