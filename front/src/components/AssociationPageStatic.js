import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useTheme } from '@mui/material/styles';
import TextButton from './ui/TextButton';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


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
            
        <Grid container spacing={10} justifyContent="space-between">
        <Grid item>
            <Img sx={{ width: 300, height: 300, borderRadius: 5 }} alt="complex" src={asso.image} />
        </Grid>
        <Grid item xl sm container justifyContent="space-between" alignItems="left">
          <Grid item xs container direction="column" spacing={2} justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom variant="title" component="div">
                {asso.name}
              </Typography>
              <Typography variant="subTitle" gutterBottom>
                {asso.university}, {asso.city}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                {asso.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                Une autre phrase écrite en dessous et très interessante.
              </Typography>
            </Grid>
            <Grid item>
                <Grid container justifyContent="space-between" >
                    <Grid item>
                        <TextButton message="Ajouter aux favoris" startIcon={<FavoriteBorderIcon />}/>
                    </Grid>
                    <Grid item>
                    { asso.partnerPropositionAllowed && 
                        <TextButton message="Contacter pour un partenariat spontané" startIcon={<MailOutlinedIcon />}/>
                    }
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> 
      </div>        
    )
}

export default AssociationPageStatic;