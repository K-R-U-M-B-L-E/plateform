const repository = require("../3.repository/searchRepository");
//const { isAssociationField, isThereMandatoryFields, isAlreadyExisting, compareAssociations } = require("../utils/utilsAssociation");
const { isJsonValid, isJsonEmpty } = require("../utils/utils");
const { json } = require("express");
//var ObjectId = require('mongodb').ObjectId; 



//SEARCH IN ASSOCIATION
async function search(req)
{
    var pipeline = [ {
        $match: {
            'university': {
                $in :  req.body.university
            }
            
        }
            
    }]

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

module.exports = {search};