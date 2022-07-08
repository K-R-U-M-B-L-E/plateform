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
        var response = await apiHandler.post({query:'/textsearch', options: props})
        return response;
    }
}

const filterController = new FilterController();
export default filterController;