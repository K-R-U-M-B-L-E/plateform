import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import AssociationListStatic from "../components/AssociationListStatic";
import ProjectList from "../components/ProjectList";
import associationController from "../services/controllers/AssociationController";

function SearchPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  
    const params = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await associationController.getById( { id: params.id});
                setData(response);
                setError(null);

            } catch(err) {
                    setError(err.message);
                    setData(null);
            } finally {
                    setLoading(false);
            }  
        }
        getData()
    }, [loading, params.id])


    return (
        <div>
            {loading && <div>A moment please...</div>}
            {error && (<div>{`There is a problem fetching the association data - ${error}`}</div>)}

            {data && data.association &&
            (<div>
                <h1>{data.association.name}</h1>
                <h2>{data.association.university}</h2>

                <AssociationListStatic query="/projects/association/" id={data.association._id} />
            </div>)
            }
        </div>
    )
}

export default SearchPage;