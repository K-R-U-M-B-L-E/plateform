import React, { useState } from"react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AssociationForm from "./components/form/AssociationForm";
import AssociationPage from "./pages/AssociationPage";
import UniversityPage from "./pages/UniversityPage";
import ProjectPage from "./pages/ProjectPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import FilterForm from "./components/Search component/FilterForm";
import SearchForm from "./components/form/SearchForm";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./context/UserContext";
import ProfilPage from "./pages/ProfilPage";
import { PrivateRoute, ProtectedRoute } from "./features/access/PrivateRoute";
import AssociationPageStatic from "./components/AssociationPageStatic";
import Krumbletheme from "./assets/global";
import { ThemeProvider } from "@mui/material";
import TestUI from "./components/testUI";
import { DisplayResult } from "./components/Result";
import { CssBaseline } from '@mui/material/';

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
              <li>
              <NavLink to="/associationform">Ajouter une association</NavLink>
              </li>
              <li>
              <NavLink to="/search">Rechercher</NavLink>
              </li>
              <li>
              <NavLink to="/profil">User Profil</NavLink>
              </li>
              <li>
              <NavLink to="/admin/dashboard">Admin section</NavLink>
              </li>
            </ul>
            <hr />

          
          <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path="/login" element={ <LoginPage />} />
                <Route path="/admin/login" element={ <LoginPage />} />
                <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} />
                <Route path="/associationform" element={ <PrivateRoute><AssociationForm/></PrivateRoute>} />
                <Route path="/association/:id" element={ <PrivateRoute><AssociationPage/></PrivateRoute>} />
                <Route path="/university/:id" element={<PrivateRoute><UniversityPage/></PrivateRoute>} />
                <Route path="/search" element={ <PrivateRoute><SearchForm/></PrivateRoute>} />
                <Route path="/admin/dashboard" element={ <ProtectedRoute><AdminPage/></ProtectedRoute>} />
                <Route path="/profil" element={ <PrivateRoute><ProfilPage/></PrivateRoute>} />
            </Routes>
          </UserContext.Provider>
          </div>
      </BrowserRouter>
      </ThemeProvider>)
}