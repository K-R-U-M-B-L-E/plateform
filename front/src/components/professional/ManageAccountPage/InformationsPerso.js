import React from 'react'
import { Grid, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'

import NomPrenomGenre from './NomPrenomGenre'

function InformationPerso() {
   return (
      <div>
         <h2 style={{ paddingBottom: '20px' }}>Informations personnelles</h2>

         <Grid container spacing={2}>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
               <IconButton>
                  <Avatar
                     alt="ajouter photo profil"
                     src="https://i.imgur.com/hRmrKOo.png"
                     style={{
                        margin: '0px',
                        width: '227px',
                        height: '227px',
                     }}
                  />
               </IconButton>
            </Grid>

            <Grid xs>
               <NomPrenomGenre />
            </Grid>
         </Grid>
      </div>
   )
}

export default InformationPerso
