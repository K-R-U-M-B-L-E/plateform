import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import moneyIcon from '../../../assets/img/project/money.svg'

import materialIcon from '../../../assets/img/project/material.svg'
import peopleIcon from '../../../assets/img/project/people.svg'

function ProjectCard({ project, association }) {
   console.log(association)
   const { presentation } = association
   const { name, university } = presentation
   const { id, date, title, description, needs } = project
   const theme = useTheme()
   const url = `/project/${id}`

   let associationToDisplay
   if (name.length + university.length > 60) {
      associationToDisplay = `${name.substring(0, 60 - university.length)}...`
   } else {
      associationToDisplay = name
   }

   return (
      <Card
         sx={{
            width: 300,
            height: 410,
            boxShadow: 'none',
            border: 0,
            backgroundColor: theme.palette.cream.main,
            cursor: 'pointer',
         }}
      >
         <Card
            sx={{
               width: 298,
               height: 355,
               border: '1px solid',
               borderColor: theme.palette.krumbleGray.gold,
               backgroundColor: theme.palette.white.main,
               borderRadius: '20px',
               boxShadow: 'none',

               display: 'flex',
               flexDirection: 'column',
            }}
         >
            <CardHeader
               sx={{ paddingBottom: 0, flex: 'initial' }}
               title={
                  <div>
                     <Typography sx={theme.typography.projectCardTitle}>
                        {title}
                     </Typography>
                     <Typography sx={theme.typography.projectCardSubTitle}>
                        {date}
                     </Typography>
                  </div>
               }
            />

            <CardContent
               sx={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  flex: 'initial ',
               }}
            >
               <Typography
                  paragraph
                  sx={{
                     display: '-webkit-box',
                     WebkitLineClamp: 10,
                     WebkitBoxOrient: 'vertical',
                     overflow: 'hidden',
                  }}
               >
                  {description}
               </Typography>
            </CardContent>
            <CardContent
               sx={{
                  paddingTop: 0,
                  flex: 'auto',
                  display: 'flex',
               }}
            >
               <Needs needs={needs} />
            </CardContent>
         </Card>

         <Box sx={{ paddingTop: '10px', height: '45px' }}>
            <Typography variant="cardTitle" sx={{}}>
               {associationToDisplay}
            </Typography>
            <Typography variant="cardSubTitle">, {university}</Typography>
         </Box>
      </Card>
   )
}

ProjectCard.propTypes = {
   association: PropTypes.shape({
      presentation: PropTypes.shape({
         name: PropTypes.string.isRequired,
         university: PropTypes.string.isRequired,
      }).isRequired,
   }).isRequired,
   project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      association: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      university: PropTypes.string.isRequired,
      needs: PropTypes.shape({
         material: PropTypes.shape({
            isNeeded: PropTypes.bool.isRequired,
            description: PropTypes.string.isRequired,
         }),
         money: PropTypes.shape({
            isNeeded: PropTypes.bool.isRequired,
            description: PropTypes.string.isRequired,
         }),
         people: PropTypes.shape({
            isNeeded: PropTypes.bool.isRequired,
            description: PropTypes.string.isRequired,
         }),
      }).isRequired,
   }).isRequired,
}

function Needs({ needs }) {
   const { material, money, people } = needs
   const { isNeeded: materialNeeded, description: materialDescription } =
      material
   const { isNeeded: moneyNeeded, amount: moneyDescription } = money
   const { isNeeded: peopleNeeded, description: peopleDescription } = people

   return (
      <Grid
         container
         direction="row"
         rowSpacing={2}
         columnSpacing={0}
         justifyContent="center"
         alignItems="center"
      >
         {materialNeeded && (
            <Grid item md={4} sm={4} sx={{ justifyContent: 'center' }}>
               <img
                  src={moneyIcon}
                  alt="money"
                  style={{ display: 'block', margin: 'auto' }}
               />
            </Grid>
         )}
         {moneyNeeded && (
            <Grid item md={4} sm={4} sx={{ justifyContent: 'center' }}>
               <img
                  src={materialIcon}
                  alt="material"
                  style={{ display: 'block', margin: 'auto', marginTop: '5px' }}
               />
            </Grid>
         )}
         {peopleNeeded && (
            <Grid item md={4} sm={4} sx={{ justifyContent: 'center' }}>
               <img
                  src={peopleIcon}
                  alt="people"
                  style={{ display: 'block', margin: 'auto' }}
               />
            </Grid>
         )}
      </Grid>
   )
}

Needs.propTypes = {
   needs: PropTypes.shape({
      material: PropTypes.shape({
         isNeeded: PropTypes.bool.isRequired,
         description: PropTypes.string.isRequired,
      }).isRequired,
      money: PropTypes.shape({
         isNeeded: PropTypes.bool.isRequired,
         amount: PropTypes.number.isRequired,
      }).isRequired,
      people: PropTypes.shape({
         isNeeded: PropTypes.bool.isRequired,
         description: PropTypes.string.isRequired,
      }).isRequired,
   }).isRequired,
}

export default ProjectCard
