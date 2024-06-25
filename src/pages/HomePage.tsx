import React, { useContext, useEffect, useRef } from 'react'
import { Loader, PostList } from '@smyt/components'
import { PostContext } from '@smyt/context'
import { PostActionTypes } from '@smyt/utils'

export const HomePage: React.FC = () => {
  const { isLoading, posts, loadPosts, query } = useContext(PostContext)!
  const scrollObserverTarget = useRef(null)

  useEffect(() => {
    loadPosts(PostActionTypes.LOAD_POSTS, query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const target = scrollObserverTarget.current
    const scrollObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        if (entry.isIntersecting && posts.length) {
          loadPosts(PostActionTypes.LOAD_POSTS, query)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollObserverTarget, posts, loadPosts])

  return (
    <>
      {isLoading && <Loader />}

      <PostList posts={posts} />

      <div ref={scrollObserverTarget} />
    </>
  )
}
