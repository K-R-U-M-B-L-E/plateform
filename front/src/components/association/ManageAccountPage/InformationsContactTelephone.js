import React from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'

function InformationsContactTelephone() {
   return (
      <Grid
         container
         spacing={2}
         display="flex"
         justifyContent="center"
         alignItems="center"
      >
         <Grid
            xs
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
         >
            <TextField
               margin="normal"
               required
               fullWidth
               id="contact-telephone"
               name="telephone-contact"
               label="06 12 34 56 78"
               autoComplete="telephone"
            />
         </Grid>

         <Grid xs md={1} />

         <Grid
            xs
            md={3}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
         >
            <Link href="/association/edit" variant="body2">
               changer de téléphone
            </Link>
         </Grid>
      </Grid>
   )
}

export default InformationsContactTelephone
