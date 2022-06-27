
function isJsonValid(str) {
    try {
        JSON.parse(str);
    } 
    catch (e) {
        return false;
    }
    return true;
}

function isJsonEmpty(str) {
    var i = 0;
    for (j in str) {
        i++;
    }

    return i===0
}

module.exports = { isJsonValid, isJsonEmpty}