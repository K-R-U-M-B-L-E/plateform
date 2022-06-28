const { response } = require("express");
const utils = require("../utils/utilsProject");
const service = require("../2.service/projectService");



//GET ALL PROJECTS
//Check : - if an error occured => return 500

async function getAll(req, res) 
{
    var response = await service.getAll();
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}


//GET AN PROJECT BY ID
//Check : - - if the id does not exist => return 404
//          - if an error occured => return 500

async function getSingle(req, res) 
{
    var response = await service.getSingle(req);
    if (response.hasOwnProperty('err') && response['err'] === "Not found" ) {res.status(404).json(response) }
    else if (response.hasOwnProperty('err')) { res.status(500).json(response) }
    else res.status(200).json(response);
}



//ADD AN PROJECT
//Check : - if an error occured => return 500
//        - if an exception on fields occured => return 500

async function addSingle(req, res) 
{
    var response = await service.addSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else if (response.hasOwnProperty('exception')) { res.status(500).json(response)}
    else res.status(200).json(response);
}



//UPDATE AN PROJECT BY ID
//Check : - if the id does not exist => return 404  
//        - if an error occured => return 500 
//        - if an exception on fields occured => return 500  
//        - if nothing had to be update => return 200
 
async function updateSingle(req, res) 
{
    var response = await service.updateSingle(req);
    if (response.hasOwnProperty('err') && response['err'] === "Not found" ) {res.status(404).json(response) }
    else if (response.hasOwnProperty('err')) { res.status(500).json(response) }
    else if (response.hasOwnProperty('exception')) { res.status(500).json(response)}
    else if (response.hasOwnProperty('status')) { res.status(200).json(response)}
    else res.status(200).json(response);
}



//DELETE AN PROJECT
//Check : - if the id does not exist => return 404
//        - if an error occured => return 500   

async function deleteSingle(req, res) 
{
    var response = await service.deleteSingle(req);
    if (response.hasOwnProperty('err') && response['err'] === "Not found" ) {res.status(404).json(response) }
    else if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}

module.exports = { getAll, getSingle, addSingle, deleteSingle, updateSingle };