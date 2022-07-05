import React from 'react';

class RequestBuilder {

    buidlGetRequest(props)
    {
        var request = {
            query: props.query,
            options: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }
        }
        return request;
    }

    buildPostRequest(props)
    {
        var request = {
            query: props.query,
            options: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: props.body
            }
        }
        return request;
    }

}

const requestBuilder = new RequestBuilder();
export default requestBuilder;