import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import emptyPhoto from '../../../../assets/img/caroussel/rectangle-empty-photo.svg'
import PlainButton from '../../../ui/button/PlainButton'

const emptyPhotos = [
   {
      img: emptyPhoto, // TODO il faut remplacer l'image par un lien bucket S3 de l'image
      title: 'Breakfast',
      order: 0,
   },
   {
      img: emptyPhoto,
      title: 'Burger',
      order: 1,
   },
   {
      img: emptyPhoto,
      title: 'Camera',
      order: 2,
   },
   {
      img: emptyPhoto,
      title: 'Coffee',
      order: 3,
   },
   {
      img: emptyPhoto,
      title: 'Hats',
      order: 4,
   },
]

export default function Caroussel({ photos }) {
   const photosToDisplay = photos || emptyPhotos

   let addPhotoButton = null
   const theme = useTheme()
   const popYellowColor = theme.palette.popYellow.main
   if (photosToDisplay === emptyPhotos) {
      addPhotoButton = (
         <Box sx={{ paddingTop: '2%' }}>
            <PlainButton message="Ajouter photos" color={popYellowColor} />
         </Box>
      )
   }

   return (
      <>
         <QuiltedImageList photos={photosToDisplay} />
         {addPhotoButton}
      </>
   )
}

Caroussel.propTypes = {
   photos: PropTypes.arrayOf(
      PropTypes.shape({
         img: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         order: PropTypes.number.isRequired,
      })
   ).isRequired,
}

Caroussel.defaultProps = {}

function srcset(image, rows = 1, cols = 1) {
   let height
   let width
   if (rows === 2 && cols === 2) {
      width = '50%'
      height = '50%'
   } else {
      width = '25%'
      height = '25%'
   }
   return {
      src: `${image}?w=${width}&h=${height}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width}&h=${height}&fit=crop&auto=format&dpr=2 2x`,
   }
}

function addParametersToPhotos({ photos }) {
   const photosWithParameters = [null, null, null, null, null]
   photos.forEach((photo) => {
      const index = photo.order
      if (index === 0) {
         photosWithParameters[index] = {
            img: photo.img,
            title: photo.title,
            rows: 3,
            cols: 2,
         }
      } else if (index === 3 || index === 4) {
         photosWithParameters[index] = {
            img: photo.img,
            title: photo.title,
            cols: 1,
            rows: 1.5,
         }
      } else {
         photosWithParameters[index] = {
            img: photo.img,
            title: photo.title,
            rows: 1.5,
         }
      }
   })
   return photosWithParameters
}

function QuiltedImageList({ photos }) {
   const photosWithParameters = addParametersToPhotos({ photos })
   return (
      <ImageList
         sx={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            minWidth: '500px',
            marginBlockEnd: '0px',
         }}
         gap={8}
         variant="quilted"
         cols={4}
         rowHeight={121}
      >
         {/* eslint-disable-next-line react/prop-types */}
         {photosWithParameters.map((item) => (
            <ImageListItem
               key={item.img}
               cols={item.cols || 1}
               rows={item.rows || 1}
            >
               <img
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...srcset(item.img, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
               />
            </ImageListItem>
         ))}
      </ImageList>
   )
}

QuiltedImageList.propTypes = {
   photos: PropTypes.arrayOf(
      PropTypes.shape({
         img: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         order: PropTypes.number.isRequired,
      }).isRequired
   ).isRequired,
}

QuiltedImageList.defaultProps = {}
