

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import Viewer from "./Scene";

function Content() {
    return (

        <MKBox sx={{ p: 4 }} bgColor="white" shadow="lg"
            mt={{ xs: 1, sm: -1, md: -1 }}
            mb={{ xs: 1, sm: 2, md: 3 }}
            mx={3}
            display="flex"
            borderRadius="xl">
            <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                <Grid item>
                    <MKBox
                        mx={-1}
                        mt={-3}
                        sx={{
                            width: {
                                xs: 300, // theme.breakpoints.up('xs')
                                sm: 500, // theme.breakpoints.up('sm')
                                md: 700, // theme.breakpoints.up('md')
                                lg: 900, // theme.breakpoints.up('lg')
                                xl: 1000, // theme.breakpoints.up('xl')
                                xxl: 1200
                            },
                            height: {
                                xs: 300, // theme.breakpoints.up('xs')
                                sm: 500, // theme.breakpoints.up('sm')
                                md: 700, // theme.breakpoints.up('md')
                                lg: 900, // theme.breakpoints.up('lg')
                                xl: 1000, // theme.breakpoints.up('xl')
                                xxl: 1200
                            },
                        }}
                    >
                        <Viewer />
                    </MKBox>
                </Grid>
            </Grid>
        </MKBox>
    );
}

export default Content;
