const repository = require("../../3.repository/association/associationRepository");
const { isAssociationField, isThereMandatoryFields } = require("../../utils");
var ObjectId = require('mongodb').ObjectId; 

//GET ALL THE ASSOCIATIONS
async function getAll()
{
    var response = await repository.getAll();
    return response
}

//GET A SINGLE ASSOCIATION BY ID
//Check: - if id is valid => return err
async function getSingle(req)
{
    if (!ObjectId.isValid(req.params.id)) { return ({ err: "ObjectId invalid"}) }

    var response = await repository.getSingle(req);
    return response
}

//ADD A SINGLE ASSOCIATION
//Check : - if mandatory fields are presents => return exception
//        - if every fields presents is an acceptable fields => return exception
async function addSingle(req)
{
    var mandatoryFields = isThereMandatoryFields(req.body)
    if (!mandatoryFields) { return { exception : "Mandatory field is missing"}}

    var fieldsLegitimate = isAssociationField(req.body)
    if (!fieldsLegitimate) { return { exception : "Wrong field name" }}
        
    var response = await repository.addSingle(req) 
    return response
}

//FIX ME : Quand le json est vide => return 404 ??
//UPDATE A SINGLE ASSOCIATION
//Check : - if every fields presents is an acceptable fields => return exception   
//        - if id is valid
async function updateSingle(req)
{
    if (!ObjectId.isValid(req.params.id)) { return ({ err: "ObjectId invalid"}) }

    var fieldsLegitimate = isAssociationField(req.body)
    if (!fieldsLegitimate) { return { exception : "Wrong field name" }}
    
    var response = await repository.updateSingle(req) 
    return response
}

//DELETE A SINGLE ASSOCIATION
//Check: - if id is valid
async function deleteSingle(req)
{
    if (!ObjectId.isValid(req.params.id)) { return ({ err: "ObjectId invalid"}) }

    var response = await repository.deleteSingle(req);
    return response
}

module.exports = {getAll, getSingle, addSingle, deleteSingle, updateSingle};