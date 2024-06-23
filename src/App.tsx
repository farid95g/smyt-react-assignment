import React, { useEffect, useState } from 'react'
import { Layout } from '@smyt/components'
import { api } from '@smyt/api'
import { Post } from '@smyt/types'

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const requestParams: RequestParams = {
      params: { _start: 0, _limit: 10 }
    }

    const fetchData = async () => {
      const response = await api.get('/photos', requestParams)
      setPosts(response.data as Post[])
    }

    fetchData()
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
