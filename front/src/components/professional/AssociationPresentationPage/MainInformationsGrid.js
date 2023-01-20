import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import ContentZone from './ContentZone'

/* COPY OF src/components/association/ManagePage/MainInformationsGrid */
export default function MainInformationGrid({ children }) {
   const [presentationComponent, carousselComponent, projectComponent] =
      children

   const theme = useTheme()
   const creamColor = theme.palette.cream.main
   const backgroundCSS = {
      height: '100%',
      paddingTop: '5%',
      paddingBottom: '0%',
      paddingRight: '10%',
      paddingLeft: '10%',
      backgroundColor: creamColor,
   }

   let projectGrid = null
   if (projectComponent !== []) {
      projectGrid = projectComponent.map((project) => (
         <Box sx={backgroundCSS}>
            <ContentZone>{project}</ContentZone>
         </Box>
      ))
   }
   let carousselGrid = null
   console.log(carousselComponent)
   if (carousselComponent !== null) {
      carousselGrid = (
         <Box sx={backgroundCSS}>
            <ContentZone title={"Photos d'évènements"}>
               {carousselComponent}
            </ContentZone>
         </Box>
      )
   }

   return (
      <>
         <Box sx={backgroundCSS}>
            <ContentZone>{presentationComponent}</ContentZone>
         </Box>
         {carousselGrid}
         {projectGrid}
      </>
   )
}

MainInformationGrid.propTypes = {
   children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

MainInformationGrid.defaultProps = {}
