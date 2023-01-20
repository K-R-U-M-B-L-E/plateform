import AssociationCard from './Card/AssociationCard.js';
import MediaCard from './Card/MediaCard.js';
import { Grid, Typography } from "@mui/material";
import Item from "@mui/material/ListItem"

function AssociationListStatic(props) {
    
    var key =0;

    const incrementKey = () => {
        key += 1;
    }

    return (
    <div className="App">
        <Typography variant="categoryTitle">{props.title}</Typography>

        <Grid container>
            {props.associations.map((association) => (
                <Grid item xs={3} sx={{ justifyContent: "center", alignItems:"center" }} key={key}>
                    <Item sx={{  display: "flex", flexDirection: "column"}}>
                        <AssociationCard id={association._id} image={association.image} name={association.name} university={association.university} description={association.description} />
                    </Item>
                    { incrementKey() }
                </Grid>
                
                ))
            }
        </Grid>
        
    </div>);
}

export default AssociationListStatic;