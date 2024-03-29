import React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { Divider, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import Footer from '../../components/ui/layouts/Footer'
import HeaderSetup from '../../components/ui/layouts/HeaderSetup'
import InformationsPerso from '../../components/professional/ManageAccountPage/InformationsPerso'
import InformationsEntreprise from '../../components/professional/ManageAccountPage/InformationsEntreprise'
import InformationsCompte from '../../components/professional/ManageAccountPage/InformationsCompte'
import BlueButton from '../../components/ui/button/BlueButton'

function ManageAccountPageEntreprise(props) {
   const theme = useTheme()

   return (
      <div>
         <HeaderSetup title="Création du profil" page="1/2" />
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
                  <InformationsPerso />
                  <InformationsEntreprise />
                  <InformationsCompte />

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

export default ManageAccountPageEntreprise
