import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import ModifyableContentZone from './ModifyableContentZone'

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

   let projectHTML = null
   if (projectComponent !== []) {
      projectHTML = projectComponent.map((project) => (
         <Box sx={backgroundCSS}>
            <ModifyableContentZone>{project}</ModifyableContentZone>
         </Box>
      ))
   }

   return (
      <>
         <Box sx={backgroundCSS}>
            <ModifyableContentZone>
               {presentationComponent}
            </ModifyableContentZone>
         </Box>
         <Box sx={backgroundCSS}>
            <ModifyableContentZone title={"Photos d'évènements"}>
               {carousselComponent}
            </ModifyableContentZone>
         </Box>
         {projectHTML}
      </>
   )
}

MainInformationGrid.propTypes = {
   children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

MainInformationGrid.defaultProps = {}
