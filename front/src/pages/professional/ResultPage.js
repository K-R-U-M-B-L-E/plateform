import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import SearchBar from '../../components/ui/layouts/SearchBar'
import FiltersBar from '../../components/ui/layouts/FiltersBar'
import AssociationList from '../../components/professional/AssociationList'
import searchController from '../../services/controllers/SearchController'

import associationController from "../../services/controllers/AssociationController"
import { SearchContext } from '../../context/SearchContext'

function ResultPage({ profileImg }) {

   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   const [searchValue, setSearchValue] = useState("")
   const searchContext = useContext(SearchContext);

   console.log(searchContext)
   return (
      <Box sx={{ width: '100%' }}>
         <Box
            sx={{
               position: 'sticky',
               zIndex: '1000',
               width: '100%',
               top: '0',
               left: '0',
            }}
         >
            <SearchBar profileImg={profileImg} />
            <FiltersBar />
         </Box>
         {!searchContext.searchData && <div>A moment please...</div>}
         {error && (
           <div>{`There is a problem fetching the association data - ${error}`}</div>
         )}

        {searchContext.searchData && searchContext.searchData.associations && (
         <AssociationList associations={searchContext.searchData.associations} />)}
      </Box>
   )
}

/*ResultPage.propTypes = {
   profileImg: PropTypes.string.isRequired,
}*/

export default ResultPage
