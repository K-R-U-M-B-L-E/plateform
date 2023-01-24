import React, { useState } from"react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { CssBaseline } from '@mui/material/';
import { PrivateRoute, ProtectedRoute } from "./features/access/PrivateRoute";
import { ThemeProvider } from "@mui/material";
import { UserContext } from "./context/UserContext";
import { SearchContext } from "./context/SearchContext";

import Krumbletheme from "./assets/global";
import LoginAssociation from "./pages/association/LoginPage";
import Signup from "./pages/association/SignUpPage";
import LoginEntreprise from "./pages/professional/LoginPage";
import HomePage from "./pages/HomePage";

import TestUI from "./components/testUI";
import { DisplayResult } from "./components/HomePageSelection";

import AssociationPage from "./pages/AssociationPage"
import ResultPage from "./pages/professional/ResultPage"




export default function App() {
  
    const [user, setUser] = useState(null);
    const [searchData, setSearchData] = useState(null)
    const [search, setSearch] = useState(null)

    return (
      <ThemeProvider theme={Krumbletheme}>         
        <CssBaseline/>

        <BrowserRouter>
          <div className="App">          
          <UserContext.Provider value={{user, setUser}}>
          <SearchContext.Provider value={{searchData, setSearchData, search, setSearch}}>

            <Routes>
                <Route path="/asso/login" element={ <LoginAssociation />} />
                <Route path="/pro/login" element={ <LoginEntreprise />} />
                <Route path="/asso/signup" element={ <Signup />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/association/:id" element={<AssociationPage/>} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>

            </SearchContext.Provider>
          </UserContext.Provider>

          </div>
      </BrowserRouter>
      </ThemeProvider>
   )
}