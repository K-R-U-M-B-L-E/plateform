import React from 'react'
import TextField from '@mui/material/TextField'
import { Grid, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'

function AssosEcoleDescTags() {
   return (
      <Grid container alignItems="center" spacing={1}>
         <Grid xs={6}>
            <Grid container alignItems="flex-start">
               <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
               >
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="association-name"
                     name="nom-association"
                     label="Nom de l'association"
                  />
               </Grid>

               <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
               >
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="school-name"
                     name="nom-ecoles"
                     label="École / Université"
                  />
               </Grid>
            </Grid>
         </Grid>

         <Grid xs={6}>
            <Grid xs={12} />
         </Grid>

         <Grid xs={12}>
            <TextField
               margin="normal"
               required
               fullWidth
               multiline
               rows={4}
               id="association-description"
               name="description-association"
               label="Description"
            />
         </Grid>

         <Grid xs={12}>
            <TextField
               margin="normal"
               required
               fullWidth
               id="association-tags"
               name="tags-association"
               label="Tags"
            />
         </Grid>
      </Grid>
   )
}

export default AssosEcoleDescTags
