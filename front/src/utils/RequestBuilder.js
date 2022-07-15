import React from 'react';
import { findCookieToken } from './cookieToken';

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

    buildPatchRequest(props)
    {
        var request = {
            query: props.query,
            options: {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: props.body
            }
        }
        return request;
    }

    buildDeleteRequest(props)
    {
        var request = {
            query: props.query,
            options: {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }
        }
        return request;
    }

}

const requestBuilder = new RequestBuilder();
export default requestBuilder;