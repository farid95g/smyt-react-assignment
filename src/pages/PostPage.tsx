import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'
import { PostDetails, Retry } from '@smyt/components'
import { ToastContext } from '@smyt/context'
import { ToastVisibility } from '@smyt/utils'

export const PostPage: React.FC = () => {
  const { id } = useParams()
  const { toggleIsOpen } = useContext(ToastContext)!
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [error, setError] = useState<string>('')

  const getPostById = useCallback(
    async (id: number) => {
      try {
        const post = await postService.getPostById(id)
        toggleIsOpen(ToastVisibility.HIDE)
        setError('')
        setSelectedPost(post as Post)
      } catch (e) {
        setError((e as ApiError).message)
        toggleIsOpen(ToastVisibility.SHOW, (e as ApiError).message)
      }
    },
    [toggleIsOpen]
  )

  useEffect(() => {
    getPostById(+id!)
  }, [id, toggleIsOpen, getPostById])

  return (
    <div style={{ width: '100%' }}>
      {error && (
        <Retry
          error={error}
          retryFailedRequest={() => getPostById(+id!)}
        />
      )}

      {selectedPost && (
        <PostDetails
          title={selectedPost.title}
          url={selectedPost.url}
        />
      )}
    </div>
  )
}
