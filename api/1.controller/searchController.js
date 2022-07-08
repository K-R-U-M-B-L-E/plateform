const { response } = require("express");
//const utils = require("../utils/utilsAssociation");
const service = require("../2.service/searchService");

//SEARCH ASSOCIATION ON FILTER
//Check : - if an error occured => return 500

async function searchByFilter(req, res) 
{
    console.log("SEARCH CONTROLLER")
    var response = await service.searchByFilter(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}


//SEARCH ASSOCIATION ON TEXT
//Check : - if an error occured => return 500

async function searchByText(req, res) 
{
    var response = await service.searchByText(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}



module.exports = {searchByFilter, searchByText};