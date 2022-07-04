import React from 'react';
import AssociationList from "../AssociationList";
import AssociationForm from "../Forms/AssociationForm";
import AssociationPage from "../Page/AssociationPage";

function HomePage()
{
    return (
        <AssociationList query="/associations"/>
    )
}

export default HomePage;