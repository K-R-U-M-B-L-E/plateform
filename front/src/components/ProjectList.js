import React, {useState, useEffect} from "react"
import projectController from "../services/controllers/ProjectController.js";
import ProjectCard from "./card/ProjectCard.js";

function ProjectList(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
                const response = await projectController.getByAsso({ association : props.id })

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