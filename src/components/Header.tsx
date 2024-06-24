import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import { AppBar, Box, Typography, InputBase, Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Link as RouterLink } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
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

export const Header: React.FC = () => {
  return (
    <header>
      <AppBar position='fixed'>
        <Container
          maxWidth='xl'
          sx={{ height: '4rem', display: 'flex', alignItems: 'center' }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <RouterLink
              to='/'
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              <Typography
                variant='h6'
                noWrap
                component='span'
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.15rem',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                SMYT REACT ASSIGNMENT
              </Typography>
            </RouterLink>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Container>
      </AppBar>
    </header>
  )
}
