import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function NavigationButton(props) {
    return (
        <Box p={3}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item>
                    {props.left && (
                        <Link to={props.left}>
                            <Button variant="contained" style={{ width: '120px', height: '50px', fontSize: '1rem', backgroundColor: '#fff', color: '#1A73E83' }} startIcon={<ArrowBackIcon />}>
                                Back
                            </Button>
                        </Link>
                    )}
                </Grid>
                <Grid item>
                    {props.right && (
                        <Link to={props.right}>
                            <Button variant="contained" style={{ width: '120px', height: '50px', fontSize: '1rem', backgroundColor: '#fff', color: '#1A73E83' }} endIcon={<ArrowForwardIcon />}>
                                Forward
                            </Button>
                        </Link>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
}

export default NavigationButton;
