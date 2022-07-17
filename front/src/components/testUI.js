import { useTheme } from '@mui/material/styles';
import BlueButton from "./ui/BlueButton";
import CheckIcon from '@mui/icons-material/Check';
import LightButton from "./ui/LightButton";
import PlainButton from "./ui/PlainButton";
import { Typography } from '@mui/material';
import TextButton from './ui/TextButton';
import AssociationCard from './card/AssociationCard';

export default function TestUI() {

    const onClick = () => {
        console.log("click")
      }

    const theme = useTheme();

    return ( <div>
    <BlueButton message="BlueButton" icon={<CheckIcon />} handleClick={onClick}/>
    <LightButton message="LightButton" startIcon={<CheckIcon />} handleClick={onClick}/>
    <LightButton message="LightButton" endIcon={<CheckIcon />} handleClick={onClick}/>
    <PlainButton message="Plain button" color={theme.palette.popRed.main} handleClick={onClick}/>
    <PlainButton message="Plain button" color={theme.palette.popYellow.main} handleClick={onClick}/>
    <PlainButton message="Plain button" color={theme.palette.popGreen.main} handleClick={onClick}/>
    <TextButton message="Text button" handleClick={onClick}/>
    
    <ul>
        <li>
            <Typography variant="categoryTitle">Category Title</Typography>
        </li>
        <li>
            <Typography variant="categoryTitleBlue">Category Title Blue</Typography>
        </li>
        <li>
            <Typography variant="title">Title</Typography>
        </li>
        <li>
            <Typography variant="cardTitle">Card Title</Typography>
        </li>
        <li>
            <Typography variant="cardSubTitle">Card SubTitle</Typography>
        </li>
        <li>
            <Typography variant="body1">Body 1</Typography>
        </li>
        <li>
            <Typography variant="body2">Body 2</Typography>
        </li>
        <li>
            <Typography variant="fieldLabel">Field label</Typography>
        </li>
        
    </ul>

    <AssociationCard image="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" name="EPIT'AS" university="EPITA" description="Tournois de poker, Evènements inter-écoles" />

     </div>)

}