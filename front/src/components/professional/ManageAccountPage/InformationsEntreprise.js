import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import TextFieldsInfosEntreprises from './TextFieldsInfosEntreprises'

function InformationsEntreprise() {
   return (
      <div>
         <h2 style={{ paddingBottom: '20px' }}>Informations de l'entreprise</h2>
         <Grid container spacing={2}>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
               <IconButton>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img
                     alt="ajouter photo d'entreprise"
                     src="https://i.imgur.com/ekiTiaZ.png"
                     style={{
                        margin: '0px',
                        width: '292px',
                        height: '182px',
                     }}
                  />
               </IconButton>
            </Grid>

            <Grid xs>
               <TextFieldsInfosEntreprises />
            </Grid>
         </Grid>
      </div>
   )
}

export default InformationsEntreprise
