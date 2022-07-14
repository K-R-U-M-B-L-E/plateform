import React, { useState } from"react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./routes/HomePage";
import AssociationForm from "./components/Forms/AssociationForm";
import AssociationPage from "./routes/AssociationPage";
import UniversityPage from "./routes/UniversityPage";
import ProjectPage from "./routes/ProjectPage";
import UserPage from "./routes/UserPage";
import AdminPage from "./routes/AdminPage";
import FilterForm from "./components/Search component/FilterForm";
import SearchForm from "./components/Forms/SearchForm";
import LoginPage from "./routes/LoginPage";
import { UserContext } from "./UserContext";
import ProfilPage from "./routes/ProfilPage";
import { PrivateRoute, ProtectedRoute } from "./PrivateRoute";


export default function App() {

  const [user, setUser] = useState(null);

    return (
      <div>
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
      </div>)
}