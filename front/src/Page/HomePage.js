import React from 'react';
import AssociationList from "../components/AssociationList";

function HomePage()
{
    return (
        <AssociationList query="/associations/visible"/>
    )
}

export default HomePage;