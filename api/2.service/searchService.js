const repository = require("../3.repository/searchRepository");
const associationRepository = require("../3.repository/associationRepository");
//const { isAssociationField, isThereMandatoryFields, isAlreadyExisting, compareAssociations } = require("../utils/utilsAssociation");
const { isJsonValid, isJsonEmpty } = require("../utils/utils");
const { json } = require("express");
const { pipelineBuilder, textPipelineBuilder } = require("../utils/utilsSearch");
const { getAssociationFields, isThisAssociationField } = require("../utils/utilsAssociation");




//SEARCH IN ASSOCIATION
async function searchByFilter(req)
{
    var pipeline= pipelineBuilder(req.body)
    if (pipeline.hasOwnProperty('err')) {return pipeline}

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
    var researchValue = null;
    if (isJsonEmpty(req.body) || req.body.research === undefined)
        researchValue = ""
    else
        researchValue = req.body.research

    var pipeline= textPipelineBuilder(researchValue)
    
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
    if(req.body === undefined || isJsonEmpty(req.body))
        return { 'err': "Empty Body"}

    try {
        const keys = req.body.keys
        if (keys.length === 0)
            return { 'exception': "No keys pass as arguments"}
        
        var response = {}
        var i;
        for (i in keys)
        {
            const key = keys[i]
            if(!isThisAssociationField(key))
                return ({"exception": `Wrong field name ${key}`})
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