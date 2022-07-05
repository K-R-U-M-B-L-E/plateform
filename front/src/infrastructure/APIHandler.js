import React from 'react';

class APIHandler {


    async get(props) {
        try {
            const response = await fetch(`${props.query}`);
            if (!response.ok) {
              throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            let serverAnswer = await response.json();
            return serverAnswer;
    
        } 
        catch(err) {
            console.error(err)
        }
    }
}

const apiHandler = new APIHandler();
export default apiHandler;