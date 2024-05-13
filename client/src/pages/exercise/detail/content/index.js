import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Tabs, Tab, Box, Typography } from '@mui/material';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import StarsIcon from '@mui/icons-material/Stars';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function Content() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { id } = useParams(); // 获取路由中的 "id" 参数

    console.log(id)
    let baseURL = "/recipes";

    const [data, setData] = React.useState([]);
    //load data
    React.useEffect(() => {
        axios({
            method: 'get',
            url: baseURL,
            params: search,
        }).then((response) => {
            setData(response.data)
        }, []);

    }, []);


    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2}
            mt={-5}
            padding="0 10%">

            <Grid style={{ marginBottom: '3%' }} id="Tips">
            </Grid>


            <Grid container spacing={2}>
                {/* Example Cards */}
                <Grid item xs={12} sm={6} md={4}>
                    <FilledInfoCard
                        icon={<AccessTimeIcon />}
                        title="PrepTime："
                        description="15min"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FilledInfoCard
                        icon={<MoreTimeIcon />}
                        title="CookTime:"
                        description="2H15min"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FilledInfoCard
                        icon={<StarsIcon />}
                        title="AggregatedRating:"
                        description="5"
                    />
                </Grid>
            </Grid>

            <Grid style={{ marginBottom: '3%' }} id="Tips">
            </Grid>

            <DefaultCounterCard
                title="Name"
                description="Recipecategory"
            />
            <Grid style={{ marginBottom: '3%' }} id="Tips">
            </Grid>



            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <BackgroundBlogCard
                        image="https://bit.ly/31BuIti"
                    />
                </Grid>
            </Grid>


            <Grid style={{ marginBottom: '3%' }} id="Tips">
            </Grid>

            {/* Tab Component */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Keywords" />
                            <Tab label="Method" />
                            <Tab label="Ingredient" />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Panel 1
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Panel 2
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Panel 3
                    </TabPanel>
                </Grid>
            </Grid>
            <Grid style={{ marginBottom: '3%' }} id="Tips">
            </Grid>

        </MKBox>
    );
}

export default Content;
