const { response } = require("express");
const utils = require("../utils/utilsUser");
const service = require("../2.service/userService");
const { isNotFound, isExceptionOrError } = require("../utils/utils");



//GET ALL USERS
//Check : - if an error occured => return 500

async function getAll(req, res) 
{
    var response = await service.getAll();
    if (isExceptionOrError(response)) { res.status(500).json(response)}
    else res.status(200).json(response);
}


//GET AN USER BY ID
//Check : - - if the id does not exist => return 404
//          - if an error occured => return 500

async function getSingle(req, res) 
{
    var response = await service.getSingle(req);
    if (isNotFound(response)) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response) }
    else res.status(200).json(response);
}


//GET AN USER BY EMAIL
//Check :   - if the email does not exist => return 404
//          - if an error occured => return 500

async function getByEmail(req, res) 
{
    var response = await service.getByEmail(req);
    if (isNotFound(response)) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response) }
    else res.status(200).json(response);
}



//ADD AN USER
//Check : - if an error occured => return 500
//        - if an exception on fields occured => return 500

async function addSingle(req, res) 
{
    var response = await service.addSingle(req);
    if (isExceptionOrError(response)) { res.status(500).json(response)}
    else res.status(200).json(response);
}



//UPDATE AN USER BY ID
//Check : - if the id does not exist => return 404  
//        - if an error occured => return 500 
//        - if an exception on fields occured => return 500  
//        - if nothing had to be update => return 200
 
async function updateSingle(req, res) 
{
    var response = await service.updateSingle(req);
    if (isNotFound(response)) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response) }
    else if (response.hasOwnProperty('status')) { res.status(200).json(response)}
    else res.status(200).json(response);
}



//DELETE AN USER
//Check : - if the id does not exist => return 404
//        - if an error occured => return 500   

async function deleteSingle(req, res) 
{
    var response = await service.deleteSingle(req);
    if (isNotFound(response)) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response)}
    else res.status(200).json(response);
}

async function login(req, res)
{
    var response = await service.login(req);
    if (isNotFound(response)) {res.status(404).json(response) }
    else if (isExceptionOrError(response)) { res.status(500).json(response)}
    else res.status(200).json(response);
}

module.exports = { getAll, getSingle, getByEmail, addSingle, deleteSingle, updateSingle, login };