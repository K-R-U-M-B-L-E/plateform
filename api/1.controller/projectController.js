const { response } = require("express");
const { isNotFound, isExceptionOrError } = require("../utils/utils");
const utils = require("../utils/utilsProject");
const service = require("../2.service/projectService");



//GET ALL PROJECTS
//Check : - if an error occured => return 500

async function getAll(req, res) 
{
    var response = await service.getAll();
    if (isExceptionOrError(response)) { res.status(500).json(response)}
    else res.status(200).json(response);
}


//GET AN PROJECT BY ID
//Check : - - if the id does not exist => return 404
//          - if an error occured => return 500

async function getSingle(req, res) 
{
    var response = await service.getSingle(req);
    if (isNotFound(response) ) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response) }
    else res.status(200).json(response);
}


//GET PROJECTS BY ASSOCIATION
//Check : - if an error occured => return 500

async function getByAsso(req, res) 
{
    var response = await service.getByAsso(req);
    if (isExceptionOrError(response)) { res.status(500).json(response)}
    else res.status(200).json(response);
}



//ADD AN PROJECT
//Check : - if an error occured => return 500
//        - if an exception on fields occured => return 500

async function addSingle(req, res) 
{
    var response = await service.addSingle(req);
    if (isExceptionOrError(response)) { res.status(500).json(response)}
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
    if (isNotFound(response) ) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response) }
    else if (response.hasOwnProperty('status')) { res.status(200).json(response)}
    else res.status(200).json(response);
}



//UPDATE SEVERAL PROJECT
//Check : - if the id does not exist => return 404  
//        - if an error occured => return 500 
//        - if an exception on fields occured => return 500  
//        - if nothing had to be update => return 200
 
async function updateMultiple(req, res) 
{
    /*var response = await service.updateSingle(req);
    if (isNotFound(response) ) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response) }
    else if (response.hasOwnProperty('exception')) { res.status(500).json(response)}
    else if (response.hasOwnProperty('status')) { res.status(200).json(response)}
    else res.status(200).json(response);*/
    return;
}



//DELETE AN PROJECT
//Check : - if the id does not exist => return 404
//        - if an error occured => return 500   

async function deleteSingle(req, res) 
{
    var response = await service.deleteSingle(req);
    if (isNotFound(response) ) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response)}
    else res.status(200).json(response);
}


//DELETE SEVERAL PROJECT
//Check : - if the id does not exist => return 404
//        - if an error occured => return 500   

async function deleteMultiple(req, res) 
{
    //var response = await service.deleteSingle(req);
    //if (isNotFound(response) ) {res.status(404).json(response) }
    //else if (isExceptionOrError(response)) { res.status(500).json(response)}
    //else res.status(200).json(response);
    return;
}

module.exports = { getAll, getSingle, getByAsso, addSingle, updateSingle, deleteMultiple, deleteSingle, deleteMultiple };