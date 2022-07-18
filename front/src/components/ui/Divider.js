import { Divider } from "@mui/material";
import { useTheme } from '@mui/material/styles';



export default function MyDivider() {

    const theme = useTheme();

    return (<Divider sx={{ marginTop: 3, marginBottom: 1, backgroundColor: theme.palette.krumbleGray.light, width: 1}} />)
}