
export function findCookieToken() 
{
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split("=")
            const name = cookie[0];
            const value = cookie[1];

            if(name==="token")
            {
                return value;
            }
        }
    }

    return null;
}