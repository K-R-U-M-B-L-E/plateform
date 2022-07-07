import React from 'react';
import apiHandler from "../APIHandler"

class FilterController {

    async get(props) {
        var response = await apiHandler.post({query:'/search', options: props})
        return response;
    }

    async getTxt(props) {
        var response = await apiHandler.post({query:'/textsearch', options: props})
        return response;
    }
}

const filterController = new FilterController();
export default filterController;