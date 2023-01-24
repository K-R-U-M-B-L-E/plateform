import Header from '../components/ui/layouts/Header'
import Footer from '../components/ui/layouts/Footer'

import SearchBar from '../components/ui/layouts/SearchBar'
import React, {useState, useEffect} from 'react'
import AssociationPresentationPage from './professional/AssociationPresentationPage'
import { useParams } from 'react-router-dom'
import associationController from '../services/controllers/AssociationController'

function AssociationPage() {

   const params = useParams();

   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const getData = async () => {
         try {
            const response = await associationController.getById({id: params.id})
            setData(response.data)
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
      <div>

         {loading && <div>A moment please...</div>}
         {error && (<div>{`There is a problem fetching the association data - ${error}`}</div>)}

         {data && data.association && (<AssociationPresentationPage association={data.association} projects={null}/>)}
      </div>
   )
}

export default AssociationPage
