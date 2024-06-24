import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Layout, Loader, PostList } from '@smyt/components'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'
import { POSTS_PER_REQUEST } from '@smyt/utils'

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [start, setStart] = useState<number>(0)
  const scrollObserverTarget = useRef(null)

  const loadPosts = useCallback(async (start: number) => {
    const posts = (await postService.loadPosts(start)) as Post[]
    setPosts((prevPosts: Post[]) => [...prevPosts, ...posts])
    setStart(start)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    loadPosts(start)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const target = scrollObserverTarget.current
    const scrollObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        if (entry.isIntersecting && posts.length) {
          loadPosts(start + POSTS_PER_REQUEST)
        }
      },
      { threshold: 1 }
    )

    if (scrollObserverTarget.current) {
      scrollObserver.observe(scrollObserverTarget.current)
    }

    return () => {
      if (target) {
        scrollObserver.unobserve(target)
      }
    }
  }, [start, scrollObserverTarget, posts, loadPosts])

  return (
    <div>
      <Layout>
        {isLoading ? <Loader /> : <PostList posts={posts} />}

        <div ref={scrollObserverTarget} />
      </Layout>
    </div>
  )
}
