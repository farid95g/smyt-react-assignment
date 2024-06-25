import React, { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { postService } from '@smyt/services'
import { Post } from '@smyt/types'

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '16rem',
      '&:focus': {
        width: '20rem'
      }
    }
  }
}))

export const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const [isMounted, setIsMounted] = useState<boolean>(false)
  let searchTimeout: ReturnType<typeof setTimeout>

  const handleSearchChange = (event: React.SyntheticEvent | Event) => {
    clearTimeout(searchTimeout)

    searchTimeout = setTimeout((): void => {
      setSearch((event.target as HTMLInputElement).value)
    }, 300)
  }

  useEffect(() => setIsMounted(true), [])

  useEffect(() => {
    const searchPostsByTitle = async () => {
      if (isMounted) {
        try {
          const posts = (await postService.searchPostsByTitle(search)) as Post[]
          console.log(posts)
        } catch (e) {
          console.log(e)
        } finally {
          console.log('FINISHED')
        }
      }
    }

    searchPostsByTitle()
  }, [search])

  return (
    <SearchBar>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleSearchChange}
        defaultValue={search}
      />
    </SearchBar>
  )
}
