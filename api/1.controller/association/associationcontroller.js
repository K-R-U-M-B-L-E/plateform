const { response } = require("express");
const utils = require("../../utils")
const service = require("../../2.service/association/associationservice")

async function getAll(req, res) 
{
    var response = await service.getAll();
    if (response.hasOwnProperty('err')) { res.status(500).json(err); return}
    res.status(200).json(response);
}

async function getSingle(req, res) 
{
    var response = await service.getSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(err); return }
    if (response.content === undefined || response === null) {res.status(404).json({ err : "Not found"}); return}
    res.status(200).json(response);
}

async function addSingle(req, res) 
{
    var response = await service.addSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(err); return}
    res.status(200).json(response);
}

async function updateSingle(req, res) 
{
    var response = await service.updateSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(err); return }
    if (response.response.modifiedCount === 0 ) {res.status(404).json({ err : "Not found"}); return}
    res.status(200).json(response);
}

async function deleteSingle(req, res) 
{
    var response = await service.deleteSingle(req);
    if (response.hasOwnProperty('err')) { res.status(500).json(err); return }
    if (response.response.deletedCount === 0 || acknowledged === false ) {res.status(404).json({ err : "Not found"}); return}
    res.status(200).json(response);
}

module.exports = { getAll, getSingle, addSingle, deleteSingle, updateSingle };