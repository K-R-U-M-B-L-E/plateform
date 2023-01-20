import React from 'react'
import { Grid, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import AssoEcoleDescTags from './AssoEcoleDescTags'

function InformationsGenerales() {
   return (
      <div>
         <h2 style={{ paddingBottom: '20px' }}>Informations Générales</h2>

         <Grid
            container
            spacing={2}
            paddingLeft={1}
            paddingRight={1}
            justifyContent="center"
            alignItems="center"
         >
            <Grid xs>
               <IconButton>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img
                     alt="ajouter photo de profil"
                     src="https://i.imgur.com/bFjJjvO.png"
                     style={{
                        margin: '0px',
                        width: '325px',
                        height: '316px',
                     }}
                  />
               </IconButton>
            </Grid>

            <Grid xs>
               <AssoEcoleDescTags />
            </Grid>
         </Grid>
      </div>
   )
}

export default InformationsGenerales
