import React, {useState, useContext} from 'react'
import { redirect,  useNavigate } from "react-router-dom";
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

import { SearchContext } from '../../../context/SearchContext'

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



function SearchBar({ searchCallback }) {
   const theme = useTheme()
   const searchContext = useContext(SearchContext);

   var search = null;
  

   const handleSubmit = () => {
      searchContext.setSearchText(search)
      searchCallback({ text : search})
   }

   const handleChange = e => {
      search = e.target.value
   }

   return (
      <>
         <Search>
            <StyledInputBase
              type="search"
                     defaultValue={searchContext.searchText}
                     placeholder="Search…"
                     inputProps={{ 'aria-label': 'search' }}
                     onChange={handleChange}
                     onKeyPress={(e) => {if (e.key === 'Enter') {handleSubmit()}}}
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
                        onClick={handleSubmit}
                     />
                  </IconButton>
               </Search>
               </>
                  )
}

/*SearchBar.propTypes = {
   profileImg: PropTypes.string.isRequired,
}*/

export default SearchBar
