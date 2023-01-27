import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Header from '../layouts/Header'
import AssociationList from '../components/professional/AssociationList'

import { SearchContext } from '../context/SearchContext'

function ResultPage({ profileImg }) {

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
            <Header />
         </Box>
         {!searchContext.searchData && <div>A moment please...</div>}
         {searchContext.searchData && searchContext.searchData.associations && (<AssociationList associations={searchContext.searchData.associations} />)}
      </Box>
   )
}

/*ResultPage.propTypes = {
   profileImg: PropTypes.string.isRequired,
}*/

export default ResultPage
