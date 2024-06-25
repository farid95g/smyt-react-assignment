import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { Loader, PostList } from '@smyt/components'
import type { Post } from '@smyt/types'
import { postService } from '@smyt/services'
import { PostContext, ToastContext } from '@smyt/context'
import { PostActionTypes, ToastVisibility } from '@smyt/utils'

export const HomePage: React.FC = () => {
  const { posts, loadPosts } = useContext(PostContext)!
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const scrollObserverTarget = useRef(null)
  const { toggleIsOpen } = useContext(ToastContext)!

  const fetchPosts = useCallback(
    async (start: number) => {
      setIsLoading(true)
      try {
        const posts = (await postService.loadPosts(start)) as Post[]
        loadPosts(PostActionTypes.LOAD_POSTS, posts)
      } catch (e) {
        toggleIsOpen(ToastVisibility.SHOW, (e as ApiError).message)
      } finally {
        setIsLoading(false)
      }
    },
    [toggleIsOpen]
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
