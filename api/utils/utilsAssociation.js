const associationFields = ["name", "university", "visible","tag"]
const mandatoryFields = ["name", "university", "visible"]

//CHECK IF EVERY FIELDS NAME ARE VALID ONE
function isAssociationField(association) {
  
  for (i in association) 
  {
    if (!associationFields.includes(i))
      return [false, i];
  }
  return [true, ""];
}

//CHECK IF MADATORY FIELDS ARE PRESENT
function isThereMandatoryFields(req)
{
  for (i in mandatoryFields)
  {
    var field = req[mandatoryFields[i]]
    if (field === null || field === undefined || field === void 0)
      return [false, mandatoryFields[i]];
  }
  return [true, ""];
}


//CHECK IF TWO ASSOCIATION ARE THE SAME
function compareAssociations(associationA, associationB)
{
    return associationA["name"] === associationB["name"] && associationA["university"] === associationB["university"]
}


module.exports = {isAssociationField, isThereMandatoryFields, compareAssociations}