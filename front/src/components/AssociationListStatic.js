import MediaCard from './Card/MediaCard.js';

function AssociationListStatic(props) {

    return (
    <div className="App">
        <h1>{props.title}</h1>

        <ul>
        {props.associations.map(({ _id, name }) => (
            <li>
                <MediaCard id={_id} title={name} description="lorem ipsum" image="https://tse1.mm.bing.net/th?id=OIP.YuzpYI2Ya5mbjWLN_yj60QHaEf&pid=Api" />
            </li>
            ))}
        </ul>
        
    </div>);
}

export default AssociationListStatic;