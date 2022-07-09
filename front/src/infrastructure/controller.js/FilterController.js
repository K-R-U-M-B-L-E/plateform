import React from 'react';
import apiHandler from "../APIHandler"
import PipelineBuilder from '../../service/PipelineBuidler';

class FilterController {

    async search(props) {
        var pipeline = PipelineBuilder(props)
        var response = await apiHandler.post({query:'/search', body: pipeline})
        return response;
    }

    async searchText(props) {
        var response = await apiHandler.post({query:'/textsearch', body: JSON.stringify({research: props})})
        return response;
    }

    async searchKey(props) {
        var response = await apiHandler.post({query:'/keysearch', body: props})
        return response;
    }
}

const filterController = new FilterController();
export default filterController;