import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import ModifyableContentZone from './ModifyableContentZone'

export default function SecondaryInformationsGrid({ children }) {
   const [ContactsComponent, HelpExplanationComponent] = children

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
         <ContactsGridItem>{ContactsComponent}</ContactsGridItem>
         <HelpExplanationGridItem>
            {HelpExplanationComponent}
         </HelpExplanationGridItem>
      </Grid>
   )
}

SecondaryInformationsGrid.propTypes = {
   children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

SecondaryInformationsGrid.defaultProps = {}

function ContactsGridItem({ children }) {
   const itemCSS = {
      paddingRight: {
         md: '10%',
         sm: '35%',
         xs: '30%',
      },
      paddingLeft: {
         md: '10%',
         sm: '35%',
         xs: '30%',
      },
   }

   return (
      <Grid item md={6} xs={12} sx={{ paddingBottom: '5%', ...itemCSS }}>
         <ModifyableContentZone title="Contacts">
            {children}
         </ModifyableContentZone>
      </Grid>
   )
}

ContactsGridItem.propTypes = {
   children: PropTypes.node.isRequired,
}

function HelpExplanationGridItem({ children }) {
   const itemCSS = {
      paddingRight: {
         md: '0%',
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
      <Grid item md={6} xs={12} sx={{ paddingBottom: '5%', ...itemCSS }}>
         <ModifyableContentZone title="Pourquoi vous aider ?">
            {children}
         </ModifyableContentZone>
      </Grid>
   )
}

HelpExplanationGridItem.propTypes = {
   children: PropTypes.node.isRequired,
}

HelpExplanationGridItem.defaultProps = {}
