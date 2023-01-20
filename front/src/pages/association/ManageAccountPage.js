import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Divider, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import React from 'react'
import BlueButton from '../../components/ui/BlueButton'
import HeaderSetup from '../../layouts/HeaderSetup'
import Footer from '../../layouts/Footer'
import InformationsGenerales from '../../components/association/ManageAccountPage/InformationsGenerales'
import InformationsCompte from '../../components/association/ManageAccountPage/InformationsCompte'
import ContactsPrincipauxAsso from '../../components/association/ManageAccountPage/ContactsPrincipauxAsso'

function ManageAccountPageAsso(props) {
   const theme = useTheme()

   return (
      <div>
         <HeaderSetup title="Modification du profil" page="" />
         <div className="container">
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: theme.palette.krumbleGray.light,
                  borderRadius: 10,
                  p: 5,
                  m: 10,
                  marginTop: 8,
               }}
            >
               <Stack
                  direction="column"
                  divider={<Divider orientation="horizontal" flexItem />}
                  spacing={2}
                  sx={{
                     width: '100%',
                     alignItems: 'left',
                  }}
               >
                  <InformationsGenerales />

                  <InformationsCompte />

                  <ContactsPrincipauxAsso />

                  <Box
                     sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                     }}
                  >
                     <BlueButton icon={<CheckIcon />} message="Valider" />
                  </Box>
               </Stack>
            </Box>
         </div>

         <Footer />
      </div>
   )
}

export default ManageAccountPageAsso
