import { useContext } from "react";
import controller from "./infrastructure/controller.js/UserController"
import { UserContext } from "./UserContext";

export default function LoginWithCookie() {

    const {user, setUser} = useContext(UserContext);

    const getCookie = async () => {
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');

            for (var i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].split("=")
                const name = cookie[0];
                const value = cookie[1];

                if(name==="token")
                {
                    var response;
                    response= await controller.loginByToken({body: {token : value}});
                    console.log(response);
                    setUser(response)
                    
                }
            }
        }
    }

    return;
}