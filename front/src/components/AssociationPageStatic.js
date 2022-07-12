import css from './AssociationPage.css'

const asso = {
    "name": "Gotta Go Hack",
    "university": "EPITA",
    "city": "Paris",

    "description": "Description standardisée de l’asso :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Vitae aliquet nec ullamcorper sit amet risus. Diam vulputate ut pharetra sit. Nam libero justo laoreet sit amet cursus. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Sed enim ut sem viverra aliquet. Massa tincidunt dui ut ornare lectus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.",
    "projet": {
        "name": "Hackathon",
        "description": "explication de l’évènement : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Vitae aliquet nec ullamcorper sit amet risus. Diam vulputate ut pharetra sit. Nam libero justo laoreet sit amet cursus. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Sed enim ut sem viverra aliquet. Massa tincidunt dui ut ornare lectus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.",
        "help": "description de l’utililsation du budget, du rôle des intervenants, utilisation du matérial : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Vitae aliquet nec ullamcorper sit amet risus. Diam vulputate ut pharetra sit. Nam libero justo laoreet sit amet cursus. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Sed enim ut sem viverra aliquet. Massa tincidunt dui ut ornare lectus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat ",
        "financial": "5000",
        "intervenants": ["spe 1", "spe 2", "spé 3"]
        }    
}

function AssociationPageStatic()
{
    return (
        <div id="css">
            <div className="general-presentation">
                <div className="logo">
                    <img src="http://www.educol.net/photo-nuages-i28835.html" />
                </div>
                <div className="general-presentation-text">
                    <div className="title">{asso.name}</div>
                    <div className="subtile">{asso.university},{asso.city}</div>
                    <div className="description">{asso.description}</div>
                </div>
                
            </div>
        </div>
    )
}

export default AssociationPageStatic;