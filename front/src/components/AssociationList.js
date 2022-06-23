import React, {useState, useEffect} from "react"
import MediaCard from './Card/MediaCard.js';

function AssociationList() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `/associations`
            );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }

            let actualData = await response.json();
                setData(actualData);
                console.log(data);
                setError(null);
          } catch(err) {
                setError(err.message);
                setData(null);
          } finally {
                setLoading(false);
          }  
        }
        getData()
      }, [])

    return (
    <div className="App">
        <h1>Liste des Associations</h1>
        {loading && <div>A moment please...</div>}
        {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
        
        <ul>
        {data && data.associations.map(({ _id, name }) => (
            <li>
                <MediaCard title={name} description="lorem ipsum" image="https://tse1.mm.bing.net/th?id=OIP.YuzpYI2Ya5mbjWLN_yj60QHaEf&pid=Api" />
            </li>
            ))}
        </ul>
        
    </div>);
}

export default AssociationList;