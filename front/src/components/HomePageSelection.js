import MyDivider from "./ui/Divider";
import AssociationListStatic from "./AssociationListStatic";
import ProjectListStatic from "./professional/ProjectList";
import { FillInBox, FillInHorizontalBox } from "./ui/FillInBox";
import { Typography, Container, Box } from "@mui/material";
import LightButton from "./ui/LightButton";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";


export default function HomePageSelection({associations, projects, associationsInLight, projectsInLight}) {

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
            <ProjectListStatic title= "Projet" projects={projectsInLight} />
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
            <AssociationListStatic associations={associationsInLight} />
        </Container>
    </Container> }

    { seeMoreAssociations && <AssociationListStatic associations={associations} />}
    { seeMoreProjects && <ProjectListStatic projects={projects} />}
    </div>
    )
}