import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import ContentZone from './ContentZone'

/* COPY OF src/components/association/ManagePage/SecondaryInformationsGrid */
export default function SecondaryInformationsGrid({ children }) {
   const theme = useTheme()
   const creamColor = theme.palette.cream.main

   return (
      <Grid
         container
         sx={{
            paddingTop: '5%',
            backgroundColor: creamColor,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
         }}
         spacing={0}
      >
         <HelpExplanationGridItem>{children}</HelpExplanationGridItem>
      </Grid>
   )
}

SecondaryInformationsGrid.propTypes = {
   children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

SecondaryInformationsGrid.defaultProps = {}

function HelpExplanationGridItem({ children }) {
   const itemCSS = {
      paddingRight: {
         md: '50%',
         sm: '10%',
         xs: '10%',
      },
      paddingLeft: {
         md: '10%',
         sm: '10%',
         xs: '10%',
      },
   }

   return (
      <Grid item md={12} xs={12} sx={{ paddingBottom: '5%', ...itemCSS }}>
         <ContentZone title="Pourquoi aider l'association ?">
            {children}
         </ContentZone>
      </Grid>
   )
}

HelpExplanationGridItem.propTypes = {
   children: PropTypes.node.isRequired,
}

HelpExplanationGridItem.defaultProps = {}
