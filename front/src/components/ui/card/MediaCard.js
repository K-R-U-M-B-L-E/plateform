import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function MediaCard(props) {
   const navigate = useNavigate()

   const url = `/association/${props.id}`

   const HandleClick = () => {
      console.log('handle click')
      navigate(url, { replace: true })
   }

   return (
      <Card sx={{ maxWidth: 345 }} onClick={HandleClick}>
         <CardActionArea>
            <CardMedia
               component="img"
               height="140"
               image={props.image}
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {props.title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {props.description}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   )
}

export default MediaCard
