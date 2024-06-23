import React, { useEffect, useState } from 'react'
import { Layout, Loader, PostList } from '@smyt/components'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadPosts = async () => {
      const posts = (await postService.loadPosts(0)) as Post[]
      setPosts(posts)
      setIsLoading(false)
    }

    loadPosts()
  }, [])

  return (
    <div>
      <Layout>{isLoading ? <Loader /> : <PostList posts={posts} />}</Layout>
    </div>
  )
}
