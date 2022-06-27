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

module.exports = {getAll, getSingle};