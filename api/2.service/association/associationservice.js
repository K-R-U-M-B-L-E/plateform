const repository = require("../../3.repository/association/associationRepository")

async function getAll()
{
    var response = await repository.getAll();
    return response
}

//FIX ME : ID DOES NOT EXIST
async function getSingle(req)
{
    var response = await repository.getSingle(req);
    return response
}

//FIX ME : INEXISTANT FIELD
async function addSingle(req)
{
    var response = await repository.addSingle(req);
    return response
}

//FIX ME : ID DOES NOT EXIST
async function updateSingle(req)
{
    var response = await repository.updateSingle(req);
    return response
}

//FIX ME : ID DOES NOT EXIST
async function deleteSingle(req)
{
    var response = await repository.deleteSingle(req);
    return response
}

module.exports = {getAll, getSingle, addSingle, deleteSingle, updateSingle};