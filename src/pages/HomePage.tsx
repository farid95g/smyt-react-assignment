import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { Loader, PostList } from '@smyt/components'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'
import { PostContext, ToastContext } from '@smyt/context'
import { PostActionTypes, ToastVisibility } from '@smyt/utils'

export const HomePage: React.FC = () => {
  const { isLoading, posts, toggleLoader, loadPosts } = useContext(PostContext)!
  const scrollObserverTarget = useRef(null)
  const { toggleIsOpen } = useContext(ToastContext)!

  const fetchPosts = useCallback(
    async (start: number) => {
      try {
        toggleLoader(true)
        const posts = (await postService.loadPosts(start)) as Post[]
        loadPosts(PostActionTypes.LOAD_POSTS, posts)
      } catch (e) {
        toggleIsOpen(ToastVisibility.SHOW, (e as ApiError).message)
      } finally {
        toggleLoader(false)
      }
    },
    [toggleIsOpen, loadPosts, toggleLoader]
  )

  useEffect(() => {
    fetchPosts(posts.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const target = scrollObserverTarget.current
    const scrollObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        if (entry.isIntersecting && posts.length) {
          fetchPosts(posts.length)
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
  }, [scrollObserverTarget, posts, fetchPosts])

  return (
    <>
      {isLoading && <Loader />}

      <PostList posts={posts} />

      <div ref={scrollObserverTarget} />
    </>
  )
}
