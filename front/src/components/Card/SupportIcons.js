import { Grid, Icon, Typography } from "@mui/material"
import Item from "@mui/material/ListItem"
import PaidIcon from '@mui/icons-material/Paid';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import PeopleIcon from '@mui/icons-material/People';
import { useTheme } from '@mui/material/styles';

export function SupportIcons(props) {

    const theme = useTheme();
    const xs = 12/props.support.length;

    return (
        <Grid container>
            { props.support.map( (s) => 
                <Grid item xs={xs} sx={{ justifyContent: "center", alignItems:"center" }}>
                    <Item sx={{  display: "flex", flexDirection: "column"}}>
                        { s==="Budget" && <PaidIcon sx={{ color: theme.palette.popYellow.main, fontSize: 40 }} /> }
                        { s==="Materiel" && <TableRestaurantOutlinedIcon sx={{ color: theme.palette.popRed.main, fontSize: 40 }}/> }
                        { s==="Intervenant" && <PeopleIcon sx={{ color: theme.palette.popGreen.main, fontSize: 40 }} /> }
                        <Typography variant="body1">{s}</Typography>
                    </Item>
                </Grid>
            )}
        </Grid>
    )
}