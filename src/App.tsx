import React, { useEffect, useState } from 'react'
import { Layout } from '@smyt/components'
import { Post } from '@smyt/types'
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
        <div>
          {posts.map((post: Post) => (
            <h1 key={post.id}>{post.title}</h1>
          ))}
        </div>
      </Layout>
    </div>
  )
}
