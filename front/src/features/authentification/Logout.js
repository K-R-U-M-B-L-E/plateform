import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export function Loggout() {
    const { user, setUser } = useContext(UserContext);

    return (
        <button onClick={setUser(null)}>Log Out</button>);
}