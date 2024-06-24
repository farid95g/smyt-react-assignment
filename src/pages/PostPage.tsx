import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '@smyt/types'
import { postService } from '@smyt/services'
import { PostDetails } from '@smyt/components'

export const PostPage: React.FC = () => {
  const { id } = useParams()
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  useEffect(() => {
    const getPostById = async (id: number) => {
      const post = await postService.getPostById(id)
      setSelectedPost(post)
    }

    getPostById(+id!)
  }, [id])

  return (
    <div>
      {selectedPost && (
        <PostDetails
          title={selectedPost.title}
          url={selectedPost.url}
        />
      )}
    </div>
  )
}
