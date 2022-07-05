import React, {useState, useEffect} from "react"
import { CircularProgress } from "@mui/material";
import MediaCard from './Card/MediaCard.js';
import associationController from "../infrastructure/controller.js/AssociationController.js";

function AssociationList(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            var response;
            if (props.context === "visible")
              response = await associationController.getAllVisible();
            else if (props.context === "invisible")
              response = await associationController.getAllInvisible();
            else  
              response = await associationController.getAll();

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
      }, [loading, props.context])

    return (
    <div className="App">
        <h1>Liste des Associations</h1>
        {loading && <div><CircularProgress /></div>}
        {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}

        <ul>
        {data && data.associations.map(({ _id, name }) => (
            <li>
                <MediaCard id={_id} title={name} description="lorem ipsum" image="https://tse1.mm.bing.net/th?id=OIP.YuzpYI2Ya5mbjWLN_yj60QHaEf&pid=Api" />
            </li>
            ))}
        </ul>
        
    </div>);
}

export default AssociationList;