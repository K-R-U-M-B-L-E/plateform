import React, { Component, useContext, useEffect, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import associationController from "../services/controllers/AssociationController"
import projectController from "../services/controllers/ProjectController"

import AssociationListStatic from '../components/AssociationListStatic';
import HomePageSelection from '../components/HomePageSelection';

// Argument à prendre => liste des asso et projet poussés
function HomePage() {

   const [associationsData, setAssociations] = useState(null);
   const [projectsData, setProjects] = useState(null);
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
      {loading && <div>A moment please...</div>}
      {error && (<div>{`There is a problem fetching the association data - ${error}`}</div>)}
      {associationsData && associationsData.associations
      && projectsData && projectsData.projects && 
      (<HomePageSelection 
      associations={associationsData.associations} 
      projects={projectsData.projects}
      associationsInLight={[associationsData.associations[0], associationsData.associations[1], associationsData.associations[2], associationsData.associations[3]]} 
      projectsInLight={[projectsData.projects[0], projectsData.projects[1]]}
       />)}
   </div>)
}

export default HomePage
