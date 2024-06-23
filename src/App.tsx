import React, { useEffect, useState } from 'react'
import { Layout, PostList } from '@smyt/components'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const loadPosts = async () => {
      const posts = (await postService.loadPosts(0)) as Post[]
      setPosts(posts)
    }

    loadPosts()
  }, [])

  return (
    <div>
      <Layout>
        <PostList posts={posts} />
      </Layout>
    </div>
  )
}
