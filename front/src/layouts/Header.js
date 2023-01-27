import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Avatar, alpha, AppBar, Box, IconButton, InputBase, styled, Toolbar, Typography } from '@mui/material'

import SearchBar from '../components/ui/layouts/SearchBar'
import TagsBar from '../components/ui/layouts/TagsBar'


import logo from '../assets/img/logo.svg'
import { useTheme } from '@mui/material/styles'
import { SearchContext } from '../context/SearchContext'
import searchController from '../services/controllers/SearchController'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Header() {
   let navigate = useNavigate();
   const theme = useTheme()
   const searchContext = useContext(SearchContext)
   const borderColor = `1px solid ${theme.palette.krumbleGray.light}`

   const [anchorElNav, setAnchorElNav] = React.useState(null)
   const [anchorElUser, setAnchorElUser] = React.useState(null)
   const [areFilterVisible, setAreFilterVisible] = React.useState(false)

   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
   const [searchValue, setSearchValue] = useState({text: "", filter: "", sort: ""})

   const handleSearch = async (props) => {
      try {

         if (props.filter !== undefined)
        {
            var json = searchValue
            json["filter"] = JSON.stringify(props.filter)
            setSearchValue(json)
        }
        else if (props.text !== undefined)
        {
            var json = searchValue
            json["text"] = props.text
            setSearchValue(json)       
        }
        else if (props.sort !== undefined)
        {
            var json = searchValue
            json["sort"] = props.sort
            setSearchValue(json)
        }

         var response = await searchController.search({ text: searchValue.text, filter: searchValue.filter, sort: searchValue.sort });

         setError(null)
         //FEED RESPONSE TO RESEARCH
         searchContext.setSearchData(response.data)
         
         
      } catch (err) {
         setError(err.message)
         searchContext.setSearchData(null)
      } finally {
         setLoading(false)
         navigate("/result")
      }
   }

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
                  <SearchBar searchCallback={handleSearch}/>
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

export default Header
