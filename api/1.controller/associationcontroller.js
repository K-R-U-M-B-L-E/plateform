const { response } = require("express");
const utils = require("../utils/utilsAssociation");
const service = require("../2.service/associationService");
const { sleep } = require("../utils/utils");

//GET ALL ASSOCIATIONS
//Check : - if an error occured => return 500

async function getAll(req, res) 
{
    sleep(3);
    var response = await service.getAll();
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}

//GET ALL VISIBLE ASSOCIATIONS
//Check : - if an error occured => return 500

async function getVisible(req, res) 
{
    var response = await service.getVisible();
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}

//GET ALL INVISIBLE ASSOCIATIONS
//Check : - if an error occured => return 500

async function getInvisible(req, res) 
{
    var response = await service.getInvisible();
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}


//GET AN ASSOCIATION BY ID
//Check : - - if the id does not exist => return 404
//          - if an error occured => return 500

async function getSingle(req, res) 
{
    var response = await service.getSingle(req);
    if (response.hasOwnProperty('err') && response['err'] === "Not found" ) {res.status(404).json(response) }
    else if (response.hasOwnProperty('err')) { res.status(500).json(response) }
    else res.status(200).json(response);
}


//GET AN ASSOCIATION BY NAME
//Check : - - if the id does not exist => return 404
//          - if an error occured => return 500

async function getByName(req, res) 
{
    var response = await service.getByName(req);
    if (response.hasOwnProperty('err') && response['err'] === "Not found" ) {res.status(404).json(response) }
    else if (response.hasOwnProperty('err')) { res.status(500).json(response) }
    else res.status(200).json(response);
}



//ADD AN ASSOCIATION
//Check : - if an error occured => return 500
//        - if an exception on fields occured => return 500

async function addSingle(req, res) 
{
    var response = await service.addSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else if (response.hasOwnProperty('exception')) { res.status(500).json(response)}
    else res.status(200).json(response);
}



//UPDATE AN ASSOCIATION BY ID
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



//DELETE AN ASSOCIATION
//Check : - if the id does not exist => return 404
//        - if an error occured => return 500   

async function deleteSingle(req, res) 
{
    var response = await service.deleteSingle(req);
    if (response.hasOwnProperty('err') && response['err'] === "Not found" ) {res.status(404).json(response) }
    else if (response.hasOwnProperty('err')) { res.status(500).json(response)}
    else res.status(200).json(response);
}

module.exports = { getAll, getVisible, getInvisible, getSingle, getByName, addSingle, deleteSingle, updateSingle };