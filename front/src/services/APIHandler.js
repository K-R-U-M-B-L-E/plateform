import React from 'react';
import requestBuilder from "../utils/RequestBuilder"
import Resource from "./Resource"

//Get formed request
//Return Resource Wrapper containing success or error
class APIRequest {

    async sendRequest(request) {
        const response = await fetch(`${request.query}`, request.options);
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);            
        }
        let serverAnswer = await response.json();
        const wrappedAnswer = new Resource(response.status==200, serverAnswer);
        
        return wrappedAnswer
    }
}

const requestObject = new APIRequest();


//Get Request Object from Front 
//Return Models
class APIHandler {

    async get(props) {

        var request = requestBuilder.buidlGetRequest(props);
        var response = await requestObject.sendRequest(request);
        return response;     
    }

    async post(props) {

        var request = requestBuilder.buildPostRequest(props);
        var response = await requestObject.sendRequest(request);
        return response;  
        
    }

    async patch(props) {
        var request = requestBuilder.buildPatchRequest(props);
        var response = await requestObject.sendRequest(request);
        return response;  
    }

    async delete(props) {
        var request = requestBuilder.buildDeleteRequest(props);
        var response = await requestObject.sendRequest(request);
        return response;  
    }
    
}

const apiHandler = new APIHandler();
export default apiHandler;