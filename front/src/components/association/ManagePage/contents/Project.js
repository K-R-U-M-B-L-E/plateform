import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import moneyIcon from '../../../../assets/img/project/money.svg'
import materialIcon from '../../../../assets/img/project/material.svg'
import peopleIcon from '../../../../assets/img/project/people.svg'

export default function Project({ project }) {
   const { title, date, description, advantagesForSponsor, needs } = project

   const theme = useTheme()

   return (
      <>
         <Typography variant="h2" sx={theme.typography.categoryTitleBlue}>
            {title}
         </Typography>
         <Typography variant="h3" sx={theme.typography.categoryTitle}>
            {date}
         </Typography>
         <Typography
            variant="h3"
            sx={{ paddingTop: '4%', ...theme.typography.cardSubTitle }}
         >
            Evénement
         </Typography>
         <Typography variant="body1" sx={theme.typography.body1}>
            {description}
         </Typography>
         <Typography
            variant="h3"
            sx={{ paddingTop: '4%', ...theme.typography.cardSubTitle }}
         >
            Pour convaincre les entreprises
         </Typography>
         <Typography variant="body1" sx={theme.typography.body1}>
            {advantagesForSponsor}
         </Typography>
         <NeedsIcons needs={needs} />
      </>
   )
}

Project.propTypes = {
   project: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string, // TODO : format à spécifier pour une date
      description: PropTypes.string,
      advantagesForSponsor: PropTypes.string,
      needs: PropTypes.shape({
         money: {
            isNeeded: PropTypes.bool,
            amount: PropTypes.number,
         },
         material: {
            isNeeded: PropTypes.bool,
            description: PropTypes.string,
         },
         people: {
            isNeeded: PropTypes.bool,
            description: PropTypes.string,
         },
      }),
   }).isRequired,
}

Project.defaultProps = {}

function NeedsIcons({ needs }) {
   const { money, material, people } = needs

   return (
      <Grid
         item
         container
         direction="row"
         rowSpacing={2}
         columnSpacing={0}
         justifyContent="center"
         sx={{ paddingTop: '4%' }}
      >
         {money.isNeeded && (
            <Grid item md={4} sm={6} sx={{ justifyContent: 'center' }}>
               <img
                  src={moneyIcon}
                  alt="money"
                  style={{ display: 'block', margin: 'auto' }}
               />
               <Typography
                  variant="body1"
                  sx={{ textAlign: 'center', paddingTop: '4%' }}
               >
                  {money.amount}€
               </Typography>
            </Grid>
         )}
         {material.isNeeded && (
            <Grid item md={4} sm={6} sx={{ justifyContent: 'center' }}>
               <img
                  src={materialIcon}
                  alt="material"
                  style={{ display: 'block', margin: 'auto' }}
               />
               <Typography
                  variant="body1"
                  sx={{ textAlign: 'center', paddingTop: '4%' }}
               >
                  {material.description}
               </Typography>
            </Grid>
         )}
         {people.isNeeded && (
            <Grid item md={4} sm={6} sx={{ justifyContent: 'center' }}>
               <img
                  src={peopleIcon}
                  alt="material"
                  style={{ display: 'block', margin: 'auto' }}
               />
               <Typography
                  variant="body1"
                  sx={{ textAlign: 'center', paddingTop: '4%' }}
               >
                  {people.description}
               </Typography>
            </Grid>
         )}
      </Grid>
   )
}

NeedsIcons.propTypes = {
   needs: PropTypes.shape({
      money: {
         isNeeded: PropTypes.bool,
         amount: PropTypes.number,
      },
      material: {
         isNeeded: PropTypes.bool,
         description: PropTypes.string,
      },
      people: {
         isNeeded: PropTypes.bool,
         description: PropTypes.string,
      },
   }).isRequired,
}
