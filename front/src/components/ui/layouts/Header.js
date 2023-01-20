import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Header(props) {
   const { sections, title } = props

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
         <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Button size="small" href="/">
               KAMPUS
            </Button>

            <IconButton align="center" noWrap sx={{ flex: 1 }}>
               <SearchIcon />
            </IconButton>

            <Box sx={{ flexGrow: 0 }}>
               <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                     <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                     />
                  </IconButton>
               </Tooltip>

               <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
               >
                  {settings.map((setting) => (
                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                     </MenuItem>
                  ))}
               </Menu>
            </Box>
         </Toolbar>

         <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
         >
            {sections.map((section) => (
               <Link
                  color="inherit"
                  noWrap
                  key="title"
                  variant="body2"
                  href="fixme.fr"
                  sx={{ p: 1, flexShrink: 0 }}
               >
                  title
               </Link>
            ))}
         </Toolbar>
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
