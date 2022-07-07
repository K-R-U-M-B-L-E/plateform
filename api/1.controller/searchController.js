const { response } = require("express");
//const utils = require("../utils/utilsAssociation");
const service = require("../2.service/searchService");

//SEARCH ASSOCIATION ON FILTER
//Check : - if an error occured => return 500

async function search(req, res) 
{
    //sleep(3);
    var response = await service.search(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}

module.exports = {search};