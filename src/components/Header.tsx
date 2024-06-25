import React from 'react'
import { AppBar, Box, Typography, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Search } from '@smyt/components'

export const Header: React.FC = () => {
  return (
    <header>
      <AppBar position='fixed'>
        <Container
          maxWidth='xl'
          sx={{ height: '4rem', display: 'flex', alignItems: 'center' }}
          className='header-container'
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            className='header-wrapper'
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

            <Search />
          </Box>
        </Container>
      </AppBar>
    </header>
  )
}
