import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'

import SearchBar from '../components/ui/layouts/SearchBar'
import TagsBar from '../components/ui/layouts/TagsBar'

import { alpha, AppBar, InputBase, styled, Typography } from '@mui/material'

import logo from '../assets/img/logo.svg'
import { useTheme } from '@mui/material/styles'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Header() {
   const theme = useTheme()
   const borderColor = `1px solid ${theme.palette.krumbleGray.light}`

   const [anchorElNav, setAnchorElNav] = React.useState(null)
   const [anchorElUser, setAnchorElUser] = React.useState(null)
   const [areFilterVisible, setAreFilterVisible] = React.useState(false)

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget)
   }

   const handleCloseUserMenu = () => {
      setAnchorElUser(null)
   }

   const handleOpenFiltersMenu = () => {
      // setAreFilterVisible(true)
      console.log('set')
   }

   return (
      <>
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
                     <a href="/">
                        <img
                           src={logo}
                           alt="logo"
                           style={{ height: '40px', marginRight: '10px' }}
                        />
                     </a>
                     <a href="/">
                        <Typography sx={theme.typography.categoryTitleBlue}>
                           Krumble
                        </Typography>
                     </a>
                  </Box>
                  <SearchBar profileImg={null}/>
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
                           //FIX ME : PROFILE IMG
                           src={null}
                           alt="logo"
                           sx={{ width: 56, height: 56 }}
                        />
                     </IconButton>
                  </Box>
               </Toolbar>
            </AppBar>
         </Box>

         <TagsBar />
      </>
   )
}

Header.propTypes = {
   sections: PropTypes.arrayOf(
      PropTypes.shape({
         title: PropTypes.string.isRequired,
      })
   ).isRequired,
   title: PropTypes.string.isRequired,
}

export default Header
