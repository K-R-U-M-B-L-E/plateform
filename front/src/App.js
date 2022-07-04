import React from"react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./Page/HomePage";
import AssociationForm from "./components/Forms/AssociationForm";
import AssociationPage from "./Page/AssociationPage";
import UniversityPage from "./Page/UniversityPage";
import ProjectPage from "./Page/ProjectPage";
import UserPage from "./Page/UserPage";

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
            </ul>
            <hr />

            <Routes>

              <Route path="/" element={ <HomePage />} />
              <Route path="/associationform" element={ <AssociationForm />} />
              <Route path="/association/:id" element={ <AssociationPage/>} />
              <Route path="/project/:id" element={ <ProjectPage/>} />
              <Route path="/university/:id" element={ <UniversityPage/>} />
              <Route path="/userprofil" element={ <UserPage/>} />

            </Routes>
          </div>
      </BrowserRouter>
    </div>)

}