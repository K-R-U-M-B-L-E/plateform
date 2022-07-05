import React from 'react';
import apiHandler from "../APIHandler"

class AssociationController {

    async getAll() {
        console.log("getAll Association controller")
        var response = await apiHandler.get({query:'/associations'})
        return response;
    }

}

const associationController = new AssociationController();
export default associationController;