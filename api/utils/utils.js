
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

function sleep(seconds)
{
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while(waitTill > new Date()){}
    return;
}

function isNotFound(response)
{
    return response.hasOwnProperty('err') && response['err'] === "Not found";
}

function isExceptionOrError(response)
{
    return (response.hasOwnProperty('err') || response.hasOwnProperty('exception'));
}

module.exports = { isJsonValid, isJsonEmpty, sleep, isNotFound, isExceptionOrError}