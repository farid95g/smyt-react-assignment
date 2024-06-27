import React, { useContext, useEffect, useRef } from 'react'
import Typography from '@mui/material/Typography'
import { Loader, PostList, Modal } from '@smyt/components'
import { PostContext } from '@smyt/context'
import { PostActionTypes } from '@smyt/utils'

export const HomePage: React.FC = () => {
  const { isLoading, posts, loadPosts, query, isLoadedAll, error } =
    useContext(PostContext)!
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
        if (entry.isIntersecting && posts.length && !isLoadedAll) {
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
      {isLoading && !error && <Loader />}

      {error && (
        <Modal.Retry
          error={error}
          retry={() =>
            loadPosts(
              query.length
                ? PostActionTypes.SEARCH_POSTS
                : PostActionTypes.LOAD_POSTS,
              query
            )
          }
        />
      )}

      {!posts.length && !isLoading && !!query.length ? (
        <Typography
          variant='h3'
          gutterBottom
        >
          No posts found with keyword {query}
        </Typography>
      ) : (
        <PostList posts={posts} />
      )}

      <div ref={scrollObserverTarget} />
    </>
  )
}
