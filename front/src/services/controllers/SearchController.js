import React from 'react';
import apiHandler from "../APIHandler"
import PipelineBuilder from '../../utils/PipelineBuidler';

class SearchController {

    async search(props) {
        var pipeline = PipelineBuilder(props)
        console.log("pipeline", pipeline)
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

const searchController = new SearchController();
export default searchController;