import MyDivider from "./ui/Divider";
import AssociationListStatic from "./AssociationListStatic";
import { FillInBox, FillInHorizontalBox } from "./ui/FillInBox";
import { Typography, Container, Box } from "@mui/material";
import LightButton from "./ui/LightButton";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";


//DUMB DATA
const projects= [
    {
        date:"Novembre 2022",
        title:"Hackathon",
        association:"Gotta Go Hack",
        university: "EPITA",
        image: "https://d1fdloi71mui9q.cloudfront.net/85viC9wS9G9UUGMTCDEv_6pNLl5zh8eWUf1Dz",
        description: "Gotta Go Hack, l'association pour l'#innovation et l'#entrepreneuriat à EPITA: Ecole d'Ingénieurs en Informatique recherche des entreprises partenaires pour son 4ème #Hackathon, de novembre 2022. ",
        support: ["Budget", "Intervenants"]
    },
    {
        date:"Aout 2022",
        title:"404Elles",
        association:"EPITROPHY",
        university: "EPITA",
        image: "https://d1fdloi71mui9q.cloudfront.net/85viC9wS9G9UUGMTCDEv_6pNLl5zh8eWUf1Dz",
        description: "Mini #road-trip qui rassemblera deux ou trois #équipages mixtes de deux personnes, chacun incluant au moins une fille. Sur le chemin, les équipes s’arrêteront dans des établissements scolaires afin de réaliser des #initiations ludiques à l’algorithmie auprès des jeunes.",
        support: ["Budget", "Matériel"]
    },
    {
        date:"Septembre 2022",
        title:"Concours d'éloquence",
        association:"L0ra",
        university: "EPITECH",
        image: "https://d1fdloi71mui9q.cloudfront.net/85viC9wS9G9UUGMTCDEv_6pNLl5zh8eWUf1Dz",
        description: "Concours d’#éloquence. C’est une occasion pour les étudiants de se dépasser et de démontrer leur prestance à travers des débats. Les participants ont aussi l’honneur de partager la scène avec des #orateurs d’exception et d’être départagés par un #jury non moins brillant.",
        support: ["Budget", "Matériel", "Intervenants"]
    },
    {
        date:"Octobre 2022",
        title:"Conférence",
        association:"LaCity",
        university: "EPITA",
        image: "https://d1fdloi71mui9q.cloudfront.net/85viC9wS9G9UUGMTCDEv_6pNLl5zh8eWUf1Dz",
        description: "Organisation d’une #conférence autour des technologies du #Web 3 afin de célébrer l’entrée de l’association dans la blockchain, qui devient ainsi l’association #finance et #blockchain de l’EPITA. Un repas gratuit pour les étudiants aura lieu ensuite pour parler de la conférence.",
        support: ["Intervenants"]
    }
    
]

const associations = [
    {
        image: "https://static.vecteezy.com/system/resources/previews/000/580/035/original/vector-butterfly-conceptual-simple-colorful-logo.jpg",
        name:"EPIT'AS",
        university: "EPITA",
        description: "Tournois de poker, Evènements inter-écoles"
    },
    {
        image: "https://static.vecteezy.com/system/resources/previews/000/580/035/original/vector-butterfly-conceptual-simple-colorful-logo.jpg",
        name:"GarageISEP",
        university: "ISEP",
        description: "Innovation, Formations sur les dernières technologies, Hackatons"
    },
    {
        image: "https://static.vecteezy.com/system/resources/previews/000/580/035/original/vector-butterfly-conceptual-simple-colorful-logo.jpg",
        name:"STAR",
        university: "UTC",
        description: "Conception et réalisation aérospatiale, participation au Cspace"
    },
    {
        image: "https://static.vecteezy.com/system/resources/previews/000/580/035/original/vector-butterfly-conceptual-simple-colorful-logo.jpg",
        name:"Convergence",
        university: "EPITA",
        description: "Enjeux sociétaux, accompagnement de projets engagés"
    }
]



export function DisplayResult(props) {

    const [seeMoreProjects, setSeeMoreProjects] = useState(false)
    const [seeMoreAssociations, setSeeMoreAssociations] = useState(false)

    const OnSeeMoreProjects = () =>
    {
        console.log("click projects")
        setSeeMoreProjects(true);
    }

    const OnSeeMoreAssociations = () =>
    {
        console.log("click associations")
        setSeeMoreAssociations(true)
    }


    return (
    <div>
    { !seeMoreAssociations && !seeMoreProjects &&
    <Container>
        <Container disableGutters >
            <FillInBox height={50} />
            <Container disableGutters>
                <Typography variant="categoryTitle">Projets Associatifs</Typography>
                <Box sx={{display: "flex", justifyContent: 'flex-end'}}>
                    <LightButton message="Voir plus" endIcon={<ChevronRightIcon />} handleClick={OnSeeMoreProjects} />
                </Box>
            </Container>

            <FillInBox height={20} />
            <ProjectListStatic projects={props.projectsInlight} />
            <FillInBox height={30} />
        </Container>

        <MyDivider />

        <Container disableGutters >
            <FillInBox height={50} />
            <Container disableGutters>
                <Typography variant="categoryTitle">Associations</Typography>
                <Box sx={{display: "flex", justifyContent: 'flex-end'}}>
                    <LightButton message="Voir plus" endIcon={<ChevronRightIcon />} handleClick={OnSeeMoreAssociations}/>
                </Box>
            </Container>

            <FillInBox height={20} />
            <AssociationListStatic associations={props.associationsInlight} />
        </Container>
    </Container> }

    { seeMoreAssociations && <AssociationListStatic associations={props.associations} />}
    { seeMoreProjects && <ProjectListStatic projects={props.projects} />}
    </div>
    )
}