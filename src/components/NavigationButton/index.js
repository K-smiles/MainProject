import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function NavigationButton(props) {

    return (<Box p={3} >
        <Grid container spacing={2}>
            {<Grid item xs={6} >
                {props.left && <Link to={props.left}>
                    <IconButton children={<ArrowBackIcon />} size="large" color="info" />
                </Link>}
            </Grid>}
            {props.right && <Grid item xs={6}>
                <Grid direction="row"
                    justifyContent="flex-end"
                    alignItems="center" container>
                    <Grid item >
                        <Link to={props.right}>
                            <IconButton children={<ArrowForwardIcon />} size="large" color="info" />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>}
        </Grid>
    </Box>)
}
export default NavigationButton;