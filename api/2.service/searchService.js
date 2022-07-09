const repository = require("../3.repository/searchRepository");
const associationRepository = require("../3.repository/associationRepository");
//const { isAssociationField, isThereMandatoryFields, isAlreadyExisting, compareAssociations } = require("../utils/utilsAssociation");
const { isJsonValid, isJsonEmpty } = require("../utils/utils");
const { json } = require("express");
const { pipelineBuilder } = require("../utils/utilsSearch");
const { getAssociationFields, isThisAssociationField } = require("../utils/utilsAssociation");




//SEARCH IN ASSOCIATION
async function searchByFilter(req)
{
    console.log("body received", req.body)
    var pipeline= pipelineBuilder(req.body)
    console.log("pipelinebuild", pipeline)

    try {
        var response = await repository.search(pipeline);
        return response
    }
    catch (err)
    {
        console.error(err)
        return (err)
    }
}


//SEARCH IN ASSOCIATION BY TEXT
async function searchByText(req)
{
    var pipeline= 
        [
            { $match: { $text: { $search: req.body.research } } },
            { $sort: { score: { $meta: "textScore" } } }
        ]
    
    try {
        var response = await repository.search(pipeline);
        return response
    }
    catch (err)
    {
        console.error(err)
        return (err)
    }
}


//SEARCH IN ASSOCIATION BY TEXT
async function searchKey(req)
{
    try {
        const keys = req.body.keys
        
        var response = {}
        var i;
        for (i in keys)
        {
            const key = keys[i]
            if(!isThisAssociationField(key))
                return ({"err": `Wrong field name ${key}`})
            var keyValues = await repository.getFieldValue(key)
            response[key] = keyValues
        }
        return response
    }
    catch (err)
    {
        console.error(err)
        return (err)
    }
}


module.exports = {searchByFilter, searchByText, searchKey};