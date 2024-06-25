import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'
import { PostDetails } from '@smyt/components'
import { ToastContext } from '@smyt/context'
import { ToastVisibility } from '@smyt/utils'

export const PostPage: React.FC = () => {
  const { id } = useParams()
  const { toggleIsOpen } = useContext(ToastContext)!
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  useEffect(() => {
    const getPostById = async (id: number) => {
      try {
        const post = await postService.getPostById(id)
        setSelectedPost(post as Post)
      } catch (e) {
        toggleIsOpen(ToastVisibility.SHOW, (e as ApiError).message)
      }
    }

    getPostById(+id!)
  }, [id, toggleIsOpen])

  return (
    <div style={{ width: '100%' }}>
      {selectedPost && (
        <PostDetails
          title={selectedPost.title}
          url={selectedPost.url}
        />
      )}
    </div>
  )
}
