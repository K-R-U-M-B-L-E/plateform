import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import PropTypes from 'prop-types'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import emptyImage from '../../../../assets/img/caroussel/square-empty-photo.svg'
import BlueButton from '../../../ui/button/BlueButton'
import TextButton from '../../../ui/button/TextButton'

const Img = styled('img')({
   margin: 'auto',
   display: 'block',
   maxWidth: '100%',
   maxHeight: '100%',
})

/* COPY OF src/components/association/ManagePage/ */
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
         <ImageGrid image={image} partnerPropositionAllowed />
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

function ImageGrid({ partnerPropositionAllowed, image }) {
   const theme = useTheme()
   const goldColor = theme.palette.krumbleGray.gold
   const imageToDisplay = image || emptyImage
   return (
      <Grid item direction="column" justifyContent="center">
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
         {partnerPropositionAllowed && (
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  flexWrap: 'wrap',
                  margin: 'auto',
                  paddingTop: '16px',
               }}
            >
               <BlueButton message="Contacter" />
            </Box>
         )}
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               alignContent: 'center',
               flexWrap: 'wrap',
               margin: 'auto',
               paddingTop: '16px',
               width: '30%',
            }}
         >
            <TextButton message="Favoris" startIcon={<FavoriteBorderIcon />} />
         </Box>
      </Grid>
   )
}

ImageGrid.propTypes = {
   image: PropTypes.string.isRequired,
   partnerPropositionAllowed: PropTypes.bool.isRequired,
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
