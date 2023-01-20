import * as React from 'react'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import PropTypes from 'prop-types'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'

import { alpha, AppBar, InputBase, styled, Typography } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

import Avatar from '@mui/material/Avatar'
import logo from '../../../assets/img/logo.svg'

const Search = styled('div')(({ theme }) => ({
   position: 'relative',

   borderRadius: '25px',
   backgroundColor: alpha(theme.palette.white.main, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.white.main, 0.25),
   },
   border: `1px solid${theme.palette.krumbleGray.light}`,
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
   boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: theme.palette.krumbleGray.main,

   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `1em`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         height: '4ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
}))

function SearchBar({ profileImg }) {
   const theme = useTheme()
   const borderColor = `1px solid ${theme.palette.krumbleGray.light}`

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar
            position="static"
            sx={{
               backgroundColor: theme.palette.white.main,
               boxShadow: 'none',
            }}
         >
            <Toolbar
               sx={{
                  boxShadow: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  height: '80px',
                  borderBottom: borderColor,
               }}
            >
               <Box
                  sx={{
                     color: 'black',
                     position: 'absolute',
                     left: '1%',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <img
                     src={logo}
                     alt="logo"
                     style={{ height: '40px', marginRight: '10px' }}
                  />
                  <Typography sx={theme.typography.categoryTitleBlue}>
                     Krumble
                  </Typography>
               </Box>
               <Search>
                  <StyledInputBase
                     placeholder="Search…"
                     inputProps={{ 'aria-label': 'search' }}
                  />
                  <IconButton
                     aria-label="delete"
                     size="medium"
                     sx={{
                        backgroundColor: theme.palette.krumbleBlue.main,
                        '&:hover': {
                           backgroundColor: theme.palette.krumbleBlue.main,
                        },
                        marginRight: '4px',
                     }}
                  >
                     <SearchIcon
                        fontSize="inherit"
                        sx={{ color: theme.palette.white.main }}
                     />
                  </IconButton>
               </Search>
               <Box
                  sx={{
                     color: 'black',
                     position: 'absolute',
                     right: '1%',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <IconButton
                     aria-label="delete"
                     size="medium"
                     sx={{
                        backgroundColor: theme.palette.krumbleBlue.main,
                        '&:hover': {
                           backgroundColor: theme.palette.krumbleBlue.main,
                        },
                        marginRight: '4px',
                        overflow: 'hidden',
                        padding: '0',
                     }}
                  >
                     <Avatar
                        src={profileImg}
                        alt="logo"
                        sx={{ width: 56, height: 56 }}
                     />
                  </IconButton>
               </Box>
            </Toolbar>
         </AppBar>
      </Box>
   )
}

SearchBar.propTypes = {
   profileImg: PropTypes.string.isRequired,
}

function FilterButton({ name, img }) {
   return (
      <Tooltip title={name} placement="bottom">
         <Button
            sx={{
               textTransform: 'none',
               display: 'block',
               width: '130px',
            }}
         >
            <img src={img} alt={name} />
         </Button>
      </Tooltip>
   )
}
FilterButton.propTypes = {
   name: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
}

export default SearchBar
