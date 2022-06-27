const { response } = require("express");
const service = require("../../2.service/association/associationservice")

async function getAll(req, res) 
{
    var response = await service.getAll();
    if (response.hasOwnProperty('err')) { res.status(500).json(err); }
    res.status(200).json(response);
}

async function getSingle(req, res) 
{
    var response = await service.getSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(err); }
    res.status(200).json(response);
}

async function addSingle(req, res) 
{
    var response = await service.addSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(err); }
    res.status(200).json(response);
}

async function updateSingle(req, res) 
{
    var response = await service.updateSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(err); }
    res.status(200).json(response);
}

async function deleteSingle(req, res) 
{
    var response = await service.deleteSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(err); }
    res.status(200).json(response);
}

module.exports = { getAll, getSingle, addSingle, deleteSingle, updateSingle };