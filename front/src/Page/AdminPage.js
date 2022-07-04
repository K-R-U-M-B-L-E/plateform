import React from 'react';
import AssociationList from "../components/AssociationList";

function AdminPage()
{
    return (
        <AssociationList query="/associations/invisible"/>
    )
}

export default AdminPage;