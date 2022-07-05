import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import associationController from "../infrastructure/controller.js/AssociationController";

function AssociationPage() {

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

                <ProjectList query="/projects/association/" id={data.association._id} />
            </div>)
            }
        </div>
    )
}

export default AssociationPage;