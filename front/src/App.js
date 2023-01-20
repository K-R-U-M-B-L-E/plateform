import React, { useState } from"react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { CssBaseline } from '@mui/material/';
import { PrivateRoute, ProtectedRoute } from "./features/access/PrivateRoute";
import { ThemeProvider } from "@mui/material";
import { UserContext } from "./context/UserContext";

import Krumbletheme from "./assets/global";
import LoginAssociation from "./pages/association/LoginPage";
import Signup from "./pages/association/SignUpPage";
import LoginEntreprise from "./pages/professional/LoginPage";
import HomePage from "./pages/HomePage";

import TestUI from "./components/testUI";
import { DisplayResult } from "./components/Result";

import associationPage from "./pages/professional/AssociationPresentationPage"
import ResultPage from "./pages/professional/ResultPage"




export default function App() {
  
    const [user, setUser] = useState(null);

    return (
      <ThemeProvider theme={Krumbletheme}>         
        <CssBaseline/>

        <BrowserRouter>
          <div className="App">
            <ul>
              <li>
              <NavLink to="/">Home</NavLink>
              </li>
            </ul>
            <hr />

          
          <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path="/asso/login" element={ <LoginAssociation />} />
                <Route path="/pro/login" element={ <LoginEntreprise />} />
                <Route path="/asso/signup" element={ <Signup />} />
                <Route path="/" element={<PrivateRoute><ResultPage profileImg="https://www.hdnicewallpapers.com/Walls/Big/Rainbow/Rainbow_on_Mountain_HD_Image.jpg"/></PrivateRoute>} />
                <Route path="/asso/{id}" element={<PrivateRoute><associationPage/></PrivateRoute>} />
            </Routes>
          </UserContext.Provider>
          </div>
      </BrowserRouter>
      </ThemeProvider>
   )
}