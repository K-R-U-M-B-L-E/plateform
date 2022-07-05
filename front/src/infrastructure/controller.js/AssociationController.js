import React from 'react';
import apiHandler from "../APIHandler"

class AssociationController {

    async getAll() {
        var response = await apiHandler.get({query:'/associations'})
        return response;
    }

    async getAllVisible() {
        var response = await apiHandler.get({query:'/associations/visible'})
        return response;
    }

    async getAllInvisible() {
        var response = await apiHandler.get({query:'/associations/invisible'})
        return response;
    }

    async getById(props) {
        var response = await apiHandler.get({query:'/associations/' + props.id})
        return response;
    }

    async getByName(props) {
        var response = await apiHandler.get({query:'/associations/' + props.name})
        return response;
    }

    async add(props) {
        var response = await apiHandler.post({query:'/associations', body: props })
        return response;
    }

}

const associationController = new AssociationController();
export default associationController;