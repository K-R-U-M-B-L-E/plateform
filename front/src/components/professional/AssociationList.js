import { Grid } from '@mui/material'
import Item from '@mui/material/ListItem'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import AssociationCardUpdate from '../ui/card/AssociationCardUpdate'
import ProjectCardUpdate from '../ui/card/ProjectCardUpdate'

function AssociationList({ associations }) {
   const theme = useTheme()
   let key = 0

   const incrementKey = () => {
      key += 1
   }

   return (
      <Grid
         container
         spacing={5}
         sx={{
            paddingTop: '100px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '0 auto',
            backgroundColor: theme.palette.cream.main,
            width: '100%',
         }}
      >
         {associations.map((association) => {
            const associationComponent = AssociationCard(association)
            const { projects } = association
            // enable to display projects cards just after
            // the association card of the association associate with the
            // project
            let projectComponentArray = []
            if (projects && projects.length > 0) {
               projectComponentArray = projects.map((project) =>
                  ProjectCard(project, association)
               )
            }
            return (
               <>
                  <Grid
                     item
                     sx={{ justifyContent: 'center', alignItems: 'center' }}
                     key={key}
                  >
                     {associationComponent}
                     {incrementKey()}
                  </Grid>
                  {projectComponentArray.map((projectComponent) => (
                     <Grid
                        item
                        sx={{
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                        key={key}
                     >
                        {projectComponent}
                        {incrementKey()}
                     </Grid>
                  ))}
               </>
            )
         })}
      </Grid>
   )
}

AssociationList.propTypes = {
   associations: PropTypes.arrayOf(
      PropTypes.shape({
         presentation: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            university: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
         }),
         projects: PropTypes.arrayOf(
            PropTypes.shape({
               title: PropTypes.string.isRequired,
               description: PropTypes.string.isRequired,
               date: PropTypes.string.isRequired,
               needs: PropTypes.shape({
                  material: PropTypes.bool.isRequired,
                  money: PropTypes.bool.isRequired,
                  people: PropTypes.bool.isRequired,
               }).isRequired,
            })
         ),
      })
   ).isRequired,
}

function AssociationCard(association) {
   return (
      <Item
         sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
         }}
      >
         <AssociationCardUpdate association={association} />
      </Item>
   )
}

AssociationCard.propTypes = {
   association: PropTypes.shape({
      presentation: PropTypes.shape({
         id: PropTypes.number.isRequired,
         name: PropTypes.string.isRequired,
         university: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         image: PropTypes.string.isRequired,
      }),
   }).isRequired,
}

function ProjectCard(project, association) {
   return (
      <Item
         sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
         }}
      >
         <ProjectCardUpdate project={project} association={association} />
      </Item>
   )
}

ProjectCard.propTypes = {
   project: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      needs: PropTypes.shape({
         material: PropTypes.bool.isRequired,
         money: PropTypes.bool.isRequired,
         people: PropTypes.bool.isRequired,
      }),
   }).isRequired,
   association: PropTypes.shape({
      presentation: PropTypes.shape({
         name: PropTypes.string.isRequired,
         university: PropTypes.string.isRequired,
      }),
   }).isRequired,
}

export default AssociationList
