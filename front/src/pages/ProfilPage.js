import { useContext, useEffect, useState } from "react";
import userController from "../services/controllers/UserController";
import { UserContext } from "../context/UserContext";


function ProfilPage() {

    const {user, setUser} = useContext(UserContext)

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { 
        const getData = async () => {
                try {
                    const response = await userController.getById({ id: user.id});

                    setData(response);
                    setError(null);

                } catch(err) {
                    setError(err.message);
                    setData(null);
                } finally {
                    setLoading(false);
                    return;
                }  
            }
        getData()
      }, [loading])


    return (<div>
        {data && <h1>Hello {data.user.firstname}!</h1>}
        </div>)
}

export default ProfilPage;