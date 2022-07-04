import React, {useState, useEffect} from "react"

function AssociationPage(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                `/associations/${props.id}`, requestOptions
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }

                let actualData = await response.json();
                setData(actualData);
                setError(null);

            } catch(err) {
                    setError(err.message);
                    setData(null);
            } finally {
                    setLoading(false);
            }  
        }
        getData()
    }, [loading])


    return (
        <div>
            {loading && <div>A moment please...</div>}
            {error && (<div>{`There is a problem fetching the association data - ${error}`}</div>)}

            {data && data.association &&
            (<div>
                <h1>{data.association.name}</h1>
                <h2>{data.association.university}</h2>
            </div>)
            }
        </div>
    )
}

export default AssociationPage;