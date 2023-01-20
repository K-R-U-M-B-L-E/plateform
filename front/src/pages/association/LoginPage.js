import React, { Component, useContext, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Icon from '@mui/material/Icon'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { UserContext } from "../../context/UserContext";
import Controller from "../../services/controllers/UserController";
import { useNavigate } from 'react-router-dom';

const defaultState = {
   email: "",
   password: ""
};

function LoginPage(props) {

   const {user, setUser} = useContext(UserContext);

    const [state, setState] = useState(defaultState)
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        const loginWithCookie = async () => {

            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');

                for (var i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].split("=")
                    const name = cookie[0];
                    const value = cookie[1];

                    if(name==="token")
                    {
                        var response;
                        response= await Controller.loginByToken({body: {token : value}});
                        setUser(response);
                        setData(response);
                        setError(null);
                        navigate('/', { replace: true });
                    }
                }
            }
        }
        loginWithCookie()
    }, [])

    const handleChange = e => {
       state[e.currentTarget.id] = e.currentTarget.value;
    };
  
    const handleSubmit = async () => {
        try {
        var response;
        response= await Controller.login({body: state})
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
      <div className="App">
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
                  Se connecter
               </Typography>
               <Box noValidate sx={{ mt: 1 }}>
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Email"
                     name="email"
                     autoComplete="email"
                     autoFocus
                     onChange={handleChange}
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Mot de passe"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                     onChange={handleChange}
                  />
                  <FormControlLabel
                     control={<Checkbox value="remember" color="primary" />}
                     label="Se souvenir de moi"
                  />
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2, bgcolor: '#1B69E4' }}
                     onClick={handleSubmit}
                  >
                     Se connecter
                  </Button>

                  <Grid container>
                     <Grid item xs>
                        <Link href="#" variant="body2">
                           Mot de passe oublié ?
                        </Link>
                     </Grid>
                     <Grid item>
                        Pas encore membre ?
                        <Link href="/asso/signup" variant="body2">
                           {/* eslint-disable-next-line react/no-unescaped-entities */}
                           S'inscrire
                        </Link>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Container>
      </div>
   )
}

export default LoginPage
