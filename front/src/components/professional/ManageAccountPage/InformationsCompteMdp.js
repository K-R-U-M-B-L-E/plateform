import React from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'

function InformationsCompteMdp() {
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
               id="password"
               name="mot-de-passe"
               label="***************"
               autoComplete="password"
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
            <Link href="/entreprise/edit" variant="body2">
               changer de mot de passe
            </Link>
         </Grid>
      </Grid>
   )
}

export default InformationsCompteMdp
