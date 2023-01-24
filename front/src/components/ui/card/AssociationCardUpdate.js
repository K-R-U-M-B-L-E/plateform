import * as React from 'react'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'

function AssociationCardUpdate({ association }) {

   const { _id, name, university, brief, image } = association
   const navigate = useNavigate()

   const url = `/association/${_id}`
   const theme = useTheme()

   const handleClick = () => {
      console.log(url)
      navigate(url, { replace: true })
   }

   let nameToDisplay
   if (name.length + university.length > 50) {
      nameToDisplay = `${name.substring(0, 50 - university.length)}...`
   } else {
      nameToDisplay = name
   }

   return (
      <Card
         sx={{
            width: 300,
            height: 410,
            boxShadow: 'none',
            border: 0,
            background: theme.palette.cream.main,
            cursor: 'pointer',
         }}
         onClick={handleClick}
      >
         <CardMedia
            sx={{
               width: 298,
               height: 298, // background: theme.palette.krumbleGray.dark,
               border: '1px solid',
               borderColor: theme.palette.krumbleGray.gold,
               backgroundColor: theme.palette.white.main,
               borderRadius: 5,
            }}
            component="img"
            height="140"
            image={image}
            alt=""
         />

         <CardContent sx={{ paddingLeft: 0 }}>
            <Typography variant="cardTitle">{nameToDisplay}</Typography>
            <Typography variant="cardSubTitle">, {university}</Typography>
            <Typography
               paragraph
               sx={{
                  paddingTop: '5px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
               }}
            >
               {brief}
            </Typography>
         </CardContent>
      </Card>
   )
}

export default AssociationCardUpdate
