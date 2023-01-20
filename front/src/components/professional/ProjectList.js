import { Grid, Typography } from '@mui/material'
import ProjectCard from '../ui/card/ProjectCard'

function ProjectListStatic(props) {
   let key = 0

   const incrementKey = () => {
      key += 1
   }

   return (
      <div className="App">
         <Typography variant="categoryTitle">{props.title}</Typography>

         <Grid container spacing={2}>
            {props.projects.map((project) => (
               <Grid item xs={3} key={key}>
                  <ProjectCard
                     title={project.title}
                     university={project.university}
                     association={project.association}
                     date={project.ata}
                     description={project.description}
                     support={project.support}
                  />
                  {incrementKey()}
               </Grid>
            ))}
         </Grid>
      </div>
   )
}

export default ProjectListStatic
