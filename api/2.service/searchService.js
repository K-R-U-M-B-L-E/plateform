const repository = require("../3.repository/searchRepository");
//const { isAssociationField, isThereMandatoryFields, isAlreadyExisting, compareAssociations } = require("../utils/utilsAssociation");
const { isJsonValid, isJsonEmpty } = require("../utils/utils");
const { json } = require("express");
const { pipelineBuilder } = require("../utils/utilsSearch");



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


module.exports = {searchByFilter, searchByText};