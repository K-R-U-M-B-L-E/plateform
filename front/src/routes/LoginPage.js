import React, { Component, useContext, useEffect, useState } from "react";
import controller from "../infrastructure/controller.js/UserController";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";


const defaultState = {
    email: "",
    password: ""
};

export default function LoginPage(props)  {

    const {user, setUser} = useContext(UserContext);

    const [state, setState] = useState(defaultState)
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

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
                        response= await controller.loginByToken({body: {token : value}});
                        setUser(response);
                        setData(response);
                        setError(null);
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
        response= await controller.login({body: state})
        console.log(response)
        setUser(response)
        

        setData(response);
        setError(null);

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
            <form className="form">
            <TextField
                label="Email"
                id="email"
                onChange={handleChange}
                type="text"
            />
            <TextField
                label="Password"
                id="password"
                onChange={handleChange}
                type="password"
            />

            <Button type="button" color="primary" className="form__custom-button" onClick={handleSubmit}>
                Log in
            </Button>
            </form>

            { error && <div>{error.message}</div>}
            { data && <Navigate to="/" />}
        </div>
        );
}