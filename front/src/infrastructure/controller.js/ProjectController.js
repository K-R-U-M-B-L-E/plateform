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

    async add(props) {
        var response = await apiHandler.post({query:'/projects', body: props })
        return response;
    }

    async update(props) {
        var response = await apiHandler.patch({query:'/projects/' + props.id, body: props.body })
        return response;
    }

    async delete(props) {
        var response = await apiHandler.patch({query:'/projects/' + props.id })
        return response;
    }

}

const projectController = new ProjectController();
export default projectController;