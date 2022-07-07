const { isJsonValid, isJsonEmpty } = require("./utils");

function pipelineBuilder(body) {
    
    pipeline = [];
    for (operator in body) {
        
        var value = body[operator]
        pipeline.push(buildOperator(operator, value))
    }
    return pipeline
}

function buildOperator(field, value) {

    switch(field) {
        case 'match':
            return operatorMatch(value)
        case 'sort':
            return null
        case 'group':
            return null
        default:
            return null
    }   
}

function operatorMatch(toMatch) {

    fieldsList = {}
    for (filter in toMatch)
    {
        var value = toMatch[`${filter}`]
        console.log(value)
        if (value.length === 0)
        {
            continue
        }
            

        logicOperator = {}
        logicOperator["$in"] = value

        fieldsList[filter] = logicOperator
    }

    operator = {}
    operator["$match"] = fieldsList

    return operator;
}

module.exports={pipelineBuilder}