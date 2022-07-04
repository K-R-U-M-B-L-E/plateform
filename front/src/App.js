import React from"react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
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
        <BrowserRouter>
          <div className="App">

            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/associationform">Ajouter une association</NavLink>
            
            <hr />

            <Routes>

              <Route path="/" element={ <HomePage />} />
              <Route path="/associationform" element={ <AssociationForm />} />
              <Route path="/association/:id" element={ <AssociationPage/>} />

            </Routes>
          </div>
      </BrowserRouter>
    </div>)

}