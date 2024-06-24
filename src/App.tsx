import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Layout, Loader, PostList } from '@smyt/components'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const scrollObserverTarget = useRef(null)

  const loadPosts = useCallback(async (start: number) => {
    setIsLoading(true)
    const posts = (await postService.loadPosts(start)) as Post[]
    setPosts((prevPosts: Post[]) => [...prevPosts, ...posts])
    setIsLoading(false)
  }, [])

  useEffect(() => {
    loadPosts(posts.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const target = scrollObserverTarget.current
    const scrollObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        if (entry.isIntersecting && posts.length) {
          loadPosts(posts.length)
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
  }, [scrollObserverTarget, posts, loadPosts])

  return (
    <div>
      <Layout>
        {isLoading && <Loader />}

        <PostList posts={posts} />

        <div ref={scrollObserverTarget} />
      </Layout>
    </div>
  )
}
