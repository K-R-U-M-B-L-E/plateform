import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import PropTypes from 'prop-types'
import { useTheme } from '@mui/material'

import PlainButton from '../../../ui/button/PlainButton'
import emptyImage from '../../../../assets/img/caroussel/square-empty-photo.svg'

const Img = styled('img')({
   margin: 'auto',
   display: 'block',
   maxWidth: '100%',
   maxHeight: '100%',
})

export default function Presentation({ presentation }) {
   const {
      name,
      image,
      partnerPropositionAllowed,
      university,
      city,
      description,
   } = presentation

   return (
      <Grid
         container
         sx={{ minWidth: '800px', paddingTop: '0px' }}
         spacing={0}
         justifyContent="space-between"
      >
         <ImageGrid image={image} />
         <DescriptionGrid
            image={image}
            description={description}
            name={name}
            city={city}
            partnerPropositionAllowed={partnerPropositionAllowed}
            university={university}
         />
      </Grid>
   )
}

Presentation.propTypes = {
   presentation: PropTypes.shape({
      name: PropTypes.string.isRequired,
      university: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      partnerPropositionAllowed: PropTypes.bool.isRequired,
   }).isRequired,
}

Presentation.defaultProps = {}

function ImageGrid({ image }) {
   const theme = useTheme()
   const goldColor = theme.palette.krumbleGray.gold
   const imageToDisplay = image || emptyImage
   return (
      <Grid item sx={{ paddingTop: '0px' }}>
         <Img
            sx={{
               width: 300,
               height: 300,
               borderRadius: 5,
               border: `1px solid${goldColor}`,
            }}
            alt="complex"
            src={imageToDisplay}
         />
      </Grid>
   )
}

ImageGrid.propTypes = {
   image: PropTypes.string.isRequired,
}

function DescriptionGrid({
   image,
   name,
   university,
   city,
   description,
   partnerPropositionAllowed,
}) {
   const theme = useTheme()
   return (
      <Grid
         item
         xl
         sm
         container
         justifyContent="space-between"
         alignItems="left"
         sx={{ paddingLeft: '5%' }}
      >
         <Grid
            item
            xs
            container
            direction="column"
            spacing={2}
            justifyContent="space-between"
         >
            <Grid item sx={{ paddingTop: '0px' }}>
               <Typography
                  gutterBottom
                  variant="h1"
                  sx={theme.typography.categoryTitleBlue}
               >
                  {name}
               </Typography>
               <Typography
                  variant="h2"
                  sx={theme.typography.categoryTitle}
                  gutterBottom
               >
                  {university}, {city}
               </Typography>
               <Typography
                  variant="body1"
                  sx={{ paddingTop: '16px', ...theme.typography.body1 }}
               >
                  {description}
               </Typography>
            </Grid>
            <PlainButtonGrid image={image} description={description} />
         </Grid>
      </Grid>
   )
}

DescriptionGrid.propTypes = {
   image: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   university: PropTypes.string.isRequired,
   city: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   partnerPropositionAllowed: PropTypes.bool.isRequired,
}

function PlainButtonGrid({ image, description }) {
   const project = false
   let plainButtonProject = null
   let plainButtonImage = null
   let plainButtonDescription = null

   const theme = useTheme()
   const popYellow = theme.palette.popYellow.main
   const popGreen = theme.palette.popGreen.main
   const popRed = theme.palette.popRed.main
   if (!description) {
      plainButtonDescription = (
         <PlainButton message="Ajouter description" color={popGreen} />
      )
   }
   if (!project && !image) {
      plainButtonProject = (
         <>
            <Grid xs={2} item />
            <Grid xs={4} item>
               <PlainButton message="Ajouter projet" color={popYellow} />
            </Grid>
         </>
      )
      plainButtonImage = (
         <>
            <Grid xs={4} item>
               <PlainButton message="Ajouter logo" color={popRed} />
            </Grid>
            <Grid xs={2} item />
         </>
      )
   } else if (!project) {
      plainButtonProject = (
         <Grid xs={12} item>
            <PlainButton message="Ajouter projet" color={popYellow} />
         </Grid>
      )
   } else if (!image) {
      plainButtonImage = (
         <Grid xs={12} item>
            <PlainButton message="Ajouter logo" color={popRed} />
         </Grid>
      )
   }
   return (
      <Grid
         item
         container
         direction="row"
         rowSpacing={2}
         columnSpacing={0}
         justifyContent="center"
      >
         <Grid xs={12} item>
            {plainButtonDescription}
         </Grid>
         {plainButtonProject}
         {plainButtonImage}
      </Grid>
   )
}

PlainButtonGrid.propTypes = {
   image: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
}
