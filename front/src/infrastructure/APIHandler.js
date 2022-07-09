import React from 'react';
import requestBuilder from "./requestBuilder"

class Request {

    async sendRequest(props) {
        const response = await fetch(`${props.query}`, props.options);
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);            
        }
        let serverAnswer = await response.json();
        return serverAnswer;
    
    }
}

const requestObject = new Request();

class APIHandler {

    async get(props) {

        var request = requestBuilder.buidlGetRequest(props);
        var response = await requestObject.sendRequest(request);
        return response;     
    }

    async post(props) {

        console.log("props",props)
        var request = requestBuilder.buildPostRequest(props);
        console.log("request", request)
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