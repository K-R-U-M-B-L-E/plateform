import { Switch } from "@mui/material";
import React from"react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/Page/HomePage";
import AssociationForm from "./components/Forms/AssociationForm";
import AssociationPage from "./components/Page/AssociationPage";
//import MediaCard from "./components/Card/MediaCard";
//import TestCard from "./components/Card/TestCard"
/*<AssociationForm />
      <AssociationList query="/associations"/>
              <AssociationPage id="62ada109255ff49af179581a"/>*/

export default function App() {

    return (
      <div>
        <Router>
          <div className="App">

            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/associationform">Ajouter une association</NavLink>
            <NavLink activeClassName="active" to="/monasso">Page Asso</NavLink>

            <hr />

            <Routes>

              <Route path="/" element={ <HomePage />} />
              <Route path="/associationform" element={ <AssociationForm />} />
              <Route path="/monasso" element={ <AssociationPage />} />

            </Routes>
          </div>
      </Router>
    </div>)

}