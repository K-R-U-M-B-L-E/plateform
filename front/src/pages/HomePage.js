import React, { Component, useContext, useEffect, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import controller from "../services/controllers/AssociationController"

import AssociationListStatic from '../components/AssociationListStatic';

// Argument à prendre => liste des asso et projet poussés
function HomePage() {

   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getData = async () => {
         try {
            var response = await controller.getAll()

            setData(response.data);
            setError(null);

         } catch(err) {
            setError(err.message);
            setData(null);
         } finally {
            setLoading(false);
            return;
         }  
      }
      getData()
   },[loading])

   return (<div>
      {loading && <div>A moment please...</div>}
      {error && (<div>{`There is a problem fetching the association data - ${error}`}</div>)}
      {data && data.associations && (<AssociationListStatic props={data} />)}
   </div>)
}

export default HomePage
