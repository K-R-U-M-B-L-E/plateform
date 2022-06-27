const associationFields = ["name", "university", "tag"]
const mandatoryFields = ["name", "university"]

//CHECK IF EVERY FIELDS NAME ARE VALID ONE
function isAssociationField(association) {
  
  for (i in association) 
  {
    if (!associationFields.includes(i))
      return false;
  }
  return true;
}

//CHECK IF MADATORY FIELDS ARE PRESENT
function isThereMandatoryFields(req)
{
  for (i in mandatoryFields)
  {
    if (req[mandatoryFields[i]] === null || req[mandatoryFields[i]] === undefined 
      || req[mandatoryFields[i]] === void 0)
      return false;
  }
  return true;
}

module.exports = {isAssociationField, isThereMandatoryFields}