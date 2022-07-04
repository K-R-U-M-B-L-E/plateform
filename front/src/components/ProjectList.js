import React, {useState, useEffect} from "react"
import ProjectCard from "./Card/ProjectCard.js";

function ProjectList(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const query = props.query + props.id;
    console.log(query)

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `${query}`
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
                return;
          }  
        }
        getData()
      }, [loading])

    return (
    <div className="App">
        <h1>Liste des Projets de l'asso</h1>
        {loading && <div>A moment please...</div>}
        {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}

        <ul>
        {data && data.projects.map(({ _id, name }) => (
            <li>
                <ProjectCard title={name} description="lorem ipsum" />
            </li>
            ))}
        </ul>
        
    </div>);
}

export default ProjectList;