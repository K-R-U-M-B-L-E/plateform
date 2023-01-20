import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import PropTypes from 'prop-types'

/* COPY OF src/components/association/ManagePage/ */
export default function Caroussel({ photos }) {
   if (photos === null) {
      return null
   }
   const photosToDisplay = photos
   return <QuiltedImageList photos={photosToDisplay} />
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

function QuiltedImageList({ photos }) {
   const photosWithParameters = addParametersToPhotos(photos)
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

function addParametersToPhotos(photos) {
   if (photos.length === 5) {
      return addParametersToListOf5photos(photos)
   }
   if (photos.length === 4) {
      return addParametersToListOf4photos(photos)
   }
   if (photos.length === 3) {
      return addParametersToListOf3photos(photos)
   }
   if (photos.length === 2) {
      return addParametersToListOf2photos(photos)
   }
   if (photos.length === 1) {
      return [
         {
            img: photos[0].img,
            title: photos[0].title,
            rows: 2,
            cols: 4,
         },
      ]
   }
   return []
}

function addParametersToListOf5photos(photos) {
   const photosWithParameters = [null, null, null, null, null]
   photos.forEach((photo) => {
      const index = photo.order
      if (index === 0) {
         photosWithParameters[index] = {
            img: photo.img,
            title: photo.title,
            rows: 2,
            cols: 2,
         }
      } else if (index === 3 || index === 4) {
         photosWithParameters[index] = {
            img: photo.img,
            title: photo.title,
            cols: 1,
            rows: 1,
         }
      } else {
         photosWithParameters[index] = {
            img: photo.img,
            title: photo.title,
            rows: 1,
         }
      }
   })
   return photosWithParameters
}

function addParametersToListOf4photos(photos) {
   const photosWithParameters = [null, null, null, null]
   photos.forEach((photo) => {
      const index = photo.order
      photosWithParameters[index] = {
         img: photo.img,
         title: photo.title,
         cols: 2,
         rows: 1,
      }
   })
   return photosWithParameters
}

function addParametersToListOf3photos(photos) {
   const photosWithParameters = [null, null, null]
   photos.forEach((photo) => {
      const index = photo.order
      if (index === 0) {
         photosWithParameters[index] = {
            img: photo.img,
            title: photo.title,
            rows: 2,
            cols: 2,
         }
      } else if (index === 1 || index === 2) {
         photosWithParameters[index] = {
            img: photo.img,
            title: photo.title,
            cols: 2,
            rows: 1,
         }
      }
   })
   return photosWithParameters
}

function addParametersToListOf2photos(photos) {
   const photosWithParameters = [null, null]
   photos.forEach((photo) => {
      const index = photo.order
      photosWithParameters[index] = {
         img: photo.img,
         title: photo.title,
         rows: 2,
         cols: 2,
      }
   })
   return photosWithParameters
}
