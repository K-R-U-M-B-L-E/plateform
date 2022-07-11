import React from"react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./routes/HomePage";
import AssociationForm from "./components/Forms/AssociationForm";
import AssociationPage from "./routes/AssociationPage";
import UniversityPage from "./routes/UniversityPage";
import ProjectPage from "./routes/ProjectPage";
import UserPage from "./routes/UserPage";
import AdminPage from "./routes/AdminPage";
import FilterForm from "./components/Forms/FilterForm";
import SearchForm from "./components/Forms/SearchForm";


export default function App() {

    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <ul>
              <li>
              <NavLink activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
              <NavLink activeClassName="active" to="/associationform">Ajouter une association</NavLink>
              </li>
              <li>
              <NavLink activeClassName="active" to="/search">Rechercher</NavLink>
              </li>
            </ul>
            <hr />

            <Routes>

              <Route path="/" element={ <HomePage />} />
              <Route path="/associationform" element={ <AssociationForm />} />
              <Route path="/association/:id" element={ <AssociationPage/>} />
              <Route path="/project/:id" element={ <ProjectPage/>} />
              <Route path="/university/:id" element={ <UniversityPage/>} />
              <Route path="/userprofil" element={ <UserPage/>} />
              <Route path="/searchfilter" element={ <FilterForm/>} />
              <Route path="/search" element={ <SearchForm/>} />
              <Route path="/admin/dashboard" element={ <AdminPage/>} />

            </Routes>
          </div>
      </BrowserRouter>
      </div>)

}