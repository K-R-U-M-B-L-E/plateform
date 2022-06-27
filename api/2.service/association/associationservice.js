const repository = require("../../3.repository/association/associationRepository")

async function getAll()
{
    var response = await repository.getAll();
    return response
}

async function getSingle(req)
{
    var response = await repository.getSingle(req);
    return response
}

async function addSingle(req)
{
    var response = await repository.addSingle(req);
    return response
}

async function updateSingle(req)
{
    var response = await repository.updateSingle(req);
    return response
}

async function deleteSingle(req)
{
    var response = await repository.deleteSingle(req);
    return response
}

module.exports = {getAll, getSingle, addSingle, deleteSingle, updateSingle};