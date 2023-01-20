import React, { Component, useContext, useEffect, useState } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { Divider, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import HeaderSetup from '../../layouts/HeaderSetup'
import Krumbletheme from '../../assets/global'
import InformationsPerso from '../../components/professional/ManageAccountPage/InformationsPerso'
import InformationsEntreprise from '../../components/professional/ManageAccountPage/InformationsEntreprise'
import InformationsCompte from '../../components/professional/ManageAccountPage/InformationsCompte'
import BlueButton from '../../components/ui/BlueButton'

function ManageAccountPage(props) {
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

export default ManageAccountPage
