import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import SearchBar from '../../components/ui/layouts/SearchBar'
import FiltersBar from '../../components/ui/layouts/FiltersBar'
import AssociationList from '../../components/professional/AssociationList'

import associationController from "../../services/controllers/AssociationController"

function ResultPage({ profileImg }) {

   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)


  useEffect(() => {
     const getData = async () => {
        try {
           const response = await associationController.getAllVisible()
           setData(response)
           setError(null)
        } catch (err) {
           setError(err.message)
           setData(null)
        } finally {
           setLoading(false)
        }
     }
     getData()
  }, [loading])


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
         {loading && <div>A moment please...</div>}
         {error && (
           <div>{`There is a problem fetching the association data - ${error}`}</div>
         )}

        {data && data.associations && (
         <AssociationList associations={data.associations} />)}
      </Box>
   )
}

ResultPage.propTypes = {
   profileImg: PropTypes.string.isRequired,
}

export default ResultPage
