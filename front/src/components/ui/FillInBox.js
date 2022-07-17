import Box from "@mui/material/Box"
import { useTheme } from '@mui/material/styles';
import { maxWidth } from "@mui/system";



export function FillInBox(props) {

    const theme = useTheme();

    return (
        <Box sx={{
            width: maxWidth,
            height: props.height,
            }}
        />
    )
}

export function FillInHorizontalBox(props) {

    const theme = useTheme();

    return (
        <Box sx={{
            width: props.width,
            height: props.height,
            }}
        />
    )
}