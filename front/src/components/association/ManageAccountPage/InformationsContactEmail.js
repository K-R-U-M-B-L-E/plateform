/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'

function InformationsContactEmail() {
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
               id="contact-email"
               name="email-contact"
               label="email.example@example.com"
               autoComplete="email"
            />
         </Grid>

         <Grid xs md={1} />

         <Grid
            xs
            md={3}
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
         >
            <Link href="/association/edit" variant="body2">
               changer d'email
            </Link>
         </Grid>
      </Grid>
   )
}

export default InformationsContactEmail
