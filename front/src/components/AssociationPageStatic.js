import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AssociationHeader from './association/associationHeader';
import { Box, Typography } from '@mui/material';
import MyDivider from './ui/Divider';


const asso = {
    "image": "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg",
    "name": "Gotta Go Hack",
    "university": "EPITA",
    "city": "Paris",
    "partnerPropositionAllowed": true, 

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
    const theme = useTheme();
    return (
        <div>
            <AssociationHeader asso={asso} />

            <Box container sx={{ height:200, width: 'auto', borderRadius:7, backgroundColor:theme.palette.white.main}}>
                <Typography variant="title">{asso.projet.name}</Typography>

                <Typography variant="subtitle" component="div">Evènement</Typography>
                <Typography variant="body1">{asso.projet.description}</Typography>

                <MyDivider />

                <Typography variant="subtitle" component="div">Pourquoi nous avons besoin de vous ?</Typography>
                <Typography variant="body1">{asso.projet.help}</Typography>
                

                <MyDivider />

            </Box>
      </div>        
    )
}

export default AssociationPageStatic;