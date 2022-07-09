const { response } = require("express");
const { returnStatus } = require("../utils/utils");
const service = require("../2.service/searchService");

//SEARCH ASSOCIATION ON FILTER
//Check : - if an error occured => return 500

async function searchByFilter(req, res) 
{
    var response = await service.searchByFilter(req);
    var statusCode = returnStatus(response)
    res.status(statusCode).json(response)
}


//SEARCH ASSOCIATION ON TEXT
//Check : - if an error occured => return 500

async function searchByText(req, res) 
{
    var response = await service.searchByText(req);
    var statusCode = returnStatus(response)
    res.status(statusCode).json(response)
}


//SEARCH KEY OF AN ASSOCIATION DOCUMENT
//Check : - if an error occured => return 500

async function searchKey(req, res) 
{
    var response = await service.searchKey(req);
    var statusCode = returnStatus(response)
    res.status(statusCode).json(response)
}


module.exports = {searchByFilter, searchByText, searchKey};