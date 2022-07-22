import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextButton from '../ui/TextButton';
import { styled } from '@mui/material/styles';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

export default function AssociationHeader(props) {

    return (
    <Grid container spacing={10} justifyContent="space-between">

        <Grid item>
            <Img sx={{ width: 300, height: 300, borderRadius: 5 }} alt="complex" src={props.asso.image} />
        </Grid>

        <Grid item xl sm container justifyContent="space-between" alignItems="left">
            <Grid item xs container direction="column" spacing={2} justifyContent="space-between">

                <Grid item>
                    <Typography gutterBottom variant="title" component="div">{props.asso.name}</Typography>
                    <Typography variant="subTitle" gutterBottom>{props.asso.university}, {props.asso.city}</Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body1" color="text.secondary">{props.asso.description}</Typography>
                </Grid>
                
                <Grid item>
                    <Typography variant="body1" color="text.secondary">Une autre phrase écrite en dessous et très interessante.</Typography>
                </Grid>

                <Grid item>
                    <Grid container justifyContent="space-between" >
                        <Grid item>
                            <TextButton message="Ajouter aux favoris" startIcon={<FavoriteBorderIcon />}/>
                        </Grid>
                        <Grid item>
                            { props.asso.partnerPropositionAllowed && 
                                <TextButton message="Contacter pour un partenariat spontané" startIcon={<MailOutlinedIcon />}/>
                            }
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </Grid>

      </Grid>);
}