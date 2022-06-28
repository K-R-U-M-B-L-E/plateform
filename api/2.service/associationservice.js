const repository = require("../3.repository/associationRepository");
const { isAssociationField, isThereMandatoryFields } = require("../utils/utilsAssociation");
const { isJsonValid, isJsonEmpty } = require("../utils/utils");
const { json } = require("express");
var ObjectId = require('mongodb').ObjectId; 



//GET ALL THE ASSOCIATIONS
async function getAll()
{
    var response = await repository.getAll();
    return response
}



//GET A SINGLE ASSOCIATION BY ID
//Check: - if id is valid => return err
//       - if body is empty => return not found
async function getSingle(req)
{
    if (!ObjectId.isValid(req.params.id)) { return ({ err: "ObjectId invalid"}) }

    var response = await repository.getSingle(req);
    if (response.association === undefined || response === null) { return { err: "Not found"}}
    else return response
}



//ADD A SINGLE ASSOCIATION
//Check : - if mandatory fields are presents => return exception
//        - if every fields presents is an acceptable fields => return exception
async function addSingle(req)
{
    //var isJsonValid = isJsonValid(req.body)
    //if (!isJsonValid) { return { err : "JSON : Bad Syntax"}}

    var [mandatoryFields, absentField] = isThereMandatoryFields(req.body)
    if (!mandatoryFields) { return { exception : `Mandatory field ${absentField} is missing`}}

    var [fieldsLegitimate, incorrectField] = isAssociationField(req.body)
    if (!fieldsLegitimate) { return { exception : `Wrong field name ${incorrectField}` }}
        
    try {
        var response = await repository.addSingle(req) 
        return response
    }
    catch(err) {

        console.err(err)
        return err;
    }
    
}



//UPDATE A SINGLE ASSOCIATION
//Check : - if id is valid  => return err 
//        - if id exists => return not found
//        - if Json is empty => return without err
//        - if every fields presents is an acceptable fields => return exception
//        - if modification had been done => return without err
async function updateSingle(req)
{
    if (!ObjectId.isValid(req.params.id)) { return ({ err: "ObjectId invalid"}) }
    if (getSingle(req) === { err: "Not found"} ) { return ({ err: "Not Found"})}
    if (isJsonEmpty(req.body) ) { return { status : "Nothing to update"}}

    //var jsonValid = isJsonValid(JSON.stringify(req.body))
    //if (!jsonValid) { return { err : "JSON : Bad Syntax"}}

    var [fieldsLegitimate, incorrectField] = isAssociationField(req.body)
    if (!fieldsLegitimate) { return { exception : `Wrong field name ${incorrectField}` }}
    
    try {
        var response = await repository.updateSingle(req)
        if (response.response.modifiedCount === 0 ) { return { status : "Nothing to update"}}
        return response
    }
    catch(err)
    {
        console.err(err);
        return err;
    }
    
}




//DELETE A SINGLE ASSOCIATION
//Check: - if id is invalid => return err
//       - if something had been deleted => return not found
async function deleteSingle(req)
{
    if (!ObjectId.isValid(req.params.id)) { return ({ err: "ObjectId invalid"}) }

    var response = await repository.deleteSingle(req);
    if (response.response.deletedCount === 0) {return ({ err : "Not found"})}
    return response
}



module.exports = {getAll, getSingle, addSingle, deleteSingle, updateSingle};