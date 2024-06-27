import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'
import { PostDetails, Modal } from '@smyt/components'
import { ModalContext, ToastContext } from '@smyt/context'
import { ModalActionTypes, ToastActionTypes } from '@smyt/utils'

export const PostPage: React.FC = () => {
  const { id } = useParams()
  const { toggleIsOpen } = useContext(ToastContext)!
  const { toggleModalVisibility } = useContext(ModalContext)!
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [error, setError] = useState<string>('')

  const getPostById = useCallback(
    async (id: number) => {
      try {
        const post = await postService.getPostById(id)
        toggleIsOpen(ToastActionTypes.HIDE)
        toggleModalVisibility(ModalActionTypes.HIDE)
        setError('')
        setSelectedPost(post as Post)
      } catch (e) {
        setError((e as ApiError).message)
        toggleIsOpen(ToastActionTypes.SHOW, (e as ApiError).message)
        toggleModalVisibility(ModalActionTypes.SHOW)
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
        <Modal.Retry
          error={error}
          retry={() => getPostById(+id!)}
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
