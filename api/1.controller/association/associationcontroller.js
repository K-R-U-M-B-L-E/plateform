const { response } = require("express");
const utils = require("../../utils/utilsAssociation");
const service = require("../../2.service/association/associationservice");

//GET ALL ASSOCIATIONS
//Check : - if an error occured => return 500
async function getAll(req, res) 
{
    var response = await service.getAll();
    if (response.hasOwnProperty('err')) { res.status(500).json(response); return}
    res.status(200).json(response);
}

//GET AN ASSOCIATION BY ID
//Check : - if an error occured => return 500
//        - if the id does not exist => return 404
async function getSingle(req, res) 
{
    var response = await service.getSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response); return }
    if (response.association === undefined || response === null) {res.status(404).json({ err : "Not found"}); return}
    res.status(200).json(response);
}

//ADD AN ASSOCIATION
//Check : - if an error occured => return 500
//        - if an exception on fields occured => return 500
async function addSingle(req, res) 
{
    var response = await service.addSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response); return}
    if (response.hasOwnProperty('exception')) { res.status(500).json(response); return}
    res.status(200).json(response);
}


//UPDATE AN ASSOCIATION BY ID
//Check : - if an error occured => return 500    
//        - if an exception on fields occured => return 500  
//        - if nothing had to be update => return 200
//        - if the id does not exist => return 404
async function updateSingle(req, res) 
{
    var response = await service.updateSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response); return }
    if (response.hasOwnProperty('exception')) { res.status(500).json(response); return}
    if (response.hasOwnProperty('status')) { res.status(200).json(response); return}
    if (response.response.modifiedCount === 0 ) {res.status(404).json({ err : "Not found"}); return}
    res.status(200).json(response);
}


//DELETE AN ASSOCIATION
//Check : - if an error occured => return 500
//        - if the id does not exist => return 404
async function deleteSingle(req, res) 
{
    var response = await service.deleteSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(response); return }
    if (response.response.deletedCount === 0 /*|| acknowledged === false*/ ) {res.status(404).json({ err : "Not found"}); return}
    res.status(200).json(response);
}

module.exports = { getAll, getSingle, addSingle, deleteSingle, updateSingle };