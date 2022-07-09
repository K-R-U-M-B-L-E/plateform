const { isJsonValid, isJsonEmpty } = require("./utils");
const { isThisAssociationField } = require("./utilsAssociation")

function pipelineBuilder(body) {
    
    pipeline = [];
    for (operator in body) {
        
        var value = body[operator]
        if (value != null || value !== [])
        {
            const operatorPipelineBuild = buildOperator(operator, value)
            if (operatorPipelineBuild.hasOwnProperty('err')) { return operatorPipelineBuild}
            else pipeline.push(operatorPipelineBuild)
        }
            
    }
    return pipeline
}

function buildOperator(field, value) {

    switch(field) {
        case 'match':
            return operatorMatch(value)            
        case 'sort':
            return operatorSort(value)
        case 'group':
            return null
        default:
            return null
    }       
}

function isEmptyValue(value)
{
    return value.length === 0;
}

function operatorMatch(toMatch) {

    fieldsList = {}
    for (filter in toMatch)
    {
        if (!isThisAssociationField(filter))
           return {'err' : `Wrong field name ${filter} in match operator`}
        
        var value = toMatch[`${filter}`]
        if (isEmptyValue(value))
        {
            continue
        }
            
        logicOperator = {}
        logicOperator["$in"] = value

        fieldsList[filter] = logicOperator
    }

    operator = {}
    operator["$match"] = fieldsList

    console.log(operator)
    console.log(operator.$match.visible)
    return operator;
}

function operatorSort(toSort) {

    fieldsList = {}
    console.log(toSort)
    for (field in toSort)
    {
        var value = toSort[field]
        if (!isThisAssociationField(value))
            return {'err' : `Wrong field name ${value} in sort operator`}
        
        fieldsList[value] = 1
    }

    if (isJsonEmpty(fieldsList))
        return null

    operator = {}
    operator["$sort"] = fieldsList

    return operator;
}

module.exports={pipelineBuilder}