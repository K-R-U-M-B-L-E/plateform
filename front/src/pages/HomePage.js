import React, { Component, useContext, useEffect, useState } from 'react'
import associationController from "../services/controllers/AssociationController"
import projectController from "../services/controllers/ProjectController"
import searchController from '../services/controllers/SearchController'

import AssociationListStatic from '../components/AssociationListStatic';
import HomePageSelection from '../components/HomePageSelection';
import ResultPage from './ResultPage'

import Box from '@mui/material/Box'
import Header from '../layouts/Header'
import AssociationList from '../components/professional/AssociationList'


function HomePage(profileImg) {

   const [associationsData, setAssociations] = useState(null);
   const [projectsData, setProjects] = useState(null);
   const [searchData, setSearchData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getSelection = async () => {
         try {
            var response = await associationController.getAllVisible()
            setAssociations(response.data);
            console.log(response.data)

            response = await projectController.getAll()
            setProjects(response.data);
            console.log(response.data)

            setError(null);

         } catch(err) {
            setError(err.message);
            setData(null);
         } finally {
            setLoading(false);
            return;
         }  
      }
      getSelection()
   },[!loading])

   return (<div>
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

      {loading && <div>A moment please...</div>}
      {error && (<div>{`There is a problem fetching the association data - ${error}`}</div>)}

      {!searchData && associationsData && associationsData.associations && projectsData && projectsData.projects && 
      (<HomePageSelection  associations={associationsData.associations} projects={projectsData.projects}
      associationsInLight={[associationsData.associations[0], associationsData.associations[1], associationsData.associations[2], associationsData.associations[3]]} 
      projectsInLight={[projectsData.projects[0], projectsData.projects[1]]}
       />)}

      {searchData && <AssociationList associations={searchData.associations} />}
      
      </Box>
   </div>)
}

export default HomePage
