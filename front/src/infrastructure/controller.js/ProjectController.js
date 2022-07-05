import React from 'react';
import apiHandler from "../APIHandler"

class ProjectController {

    async getAll() {
        var response = await apiHandler.get({query:'/projects'})
        return response;
    }

    async getById(props) {
        var response = await apiHandler.get({query:'/projects/' + props.id})
        return response;
    }

    async getByAsso(props) {
        var response = await apiHandler.get({query:'/projects/association/' + props.association})
        return response;
    }

}

const projectController = new ProjectController();
export default projectController;