import React, { Component, useContext, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import Controller from '../../services/controllers/UserController.js';
import { UserContext } from "../../context/UserContext.js";
import { useNavigate } from 'react-router-dom';

const defaultState = {
   firstname: "",
   lastname: "",
   email: "",
   password: "",
   credential: "member"
};

function SignUpPage(props) {

   const {user, setUser} = useContext(UserContext);

    const [state, setState] = useState(defaultState)
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const navigate = useNavigate();

    const handleChange = e => {
       state[e.currentTarget.id] = e.currentTarget.value;
    };
  
    const handleSubmit = async () => {
        try {
        var response;
        console.log(state)
        response= await Controller.signup(state)
        console.log(response)
        setUser(response)
        

        setData(response);
        setError(null);
        navigate('/', { replace: true });

        } catch(err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
            return;
        }  
    }
   return (
      <div>
         <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
               sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Avatar sx={{ m: 1, bgcolor: '#1B69E4' }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign up
               </Typography>
               <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           autoComplete="given-name"
                           name="firstname"
                           required
                           fullWidth
                           id="firstname"
                           label="Prénom"
                           autoFocus

                           onChange={handleChange}
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           required
                           fullWidth
                           id="lastname"
                           label="Nom"
                           name="lastname"
                           autoComplete="last-name"
                           onChange={handleChange}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           id="email"
                           label="Email"
                           name="email"
                           autoComplete="email"
                           onChange={handleChange}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           name="password"
                           label="Mot de passe"
                           type="password"
                           id="password"
                           autoComplete="new-password"
                           onChange={handleChange}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 value="allowExtraEmails"
                                 color="primary"
                              />
                           }
                           label="Je veux recevoir la newsletter Krumble ainsi que des infos exclusives"
                           onChange={handleChange}
                        />
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2, bgcolor: '#1B69E4' }}
                     onClick={handleSubmit}
                  >
                     {/* eslint-disable-next-line react/no-unescaped-entities */}
                     S'inscrire
                  </Button>
                  <Grid container justifyContent="flex-end">
                     <Grid item>
                        Déjà membre ?
                        <Link href="/asso/login" variant="body2">
                           Se connecter
                        </Link>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Container>
      </div>
   )
}

export default SignUpPage
