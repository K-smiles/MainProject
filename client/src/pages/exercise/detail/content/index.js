import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Tabs, Tab, Box, Typography } from '@mui/material';
import MKBox from "components/MKBox";

import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import NavigationButton from 'components/NavigationButton';
import Divider from '@mui/material/Divider';

// Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import StarsIcon from '@mui/icons-material/Stars';
import axios from 'axios';
import { Image } from 'antd';
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
    const { id } = useParams();
    let baseURL = process.env.REACT_APP_BASEURL + "/recipes/" + id;
    const [data, setData] = React.useState([]);

    //load data
    React.useEffect(() => {

        axios({
            method: 'get',
            url: baseURL,
        }).then((response) => {
            setData(response.data)
        }, [])
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2}
            mt={-5}
        >
            <Grid container spacing={2} mt={2} >
                <Grid item xs={12} md={4}>
                    <FilledInfoCard
                        icon={<AccessTimeIcon />}
                        title="PrepTime："
                        description={data['PrepTime']}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FilledInfoCard
                        icon={<MoreTimeIcon />}
                        title="CookTime:"
                        description={data['CookTime']}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FilledInfoCard
                        icon={<StarsIcon />}
                        title="AggregatedRating:"
                        description={data['AggregatedRating']}
                    />
                </Grid>
            </Grid>

            <MKBox borderRadius="xl" shadow="lg"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}
                mx={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <DefaultCounterCard
                    title={data['Name']}
                    description="Recipecategory"
                />
                <Image
                    width={700}
                    src={data['Images']}
                />
                <Box width={1000} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="display the detail of recipe">
                        <Tab label="Ingredient list" />
                        <Tab label="Steps" />
                        <Tab label="Raw material" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center' }}>
                            {data['Calories'] !== undefined &&
                                <Typography variant='h3'>Calories:     {data['Calories']}</Typography>
                            }
                            <Divider component="li" />
                            {data['CarbohydrateContent'] !== undefined &&
                                <Typography variant='h3'>Carbohydrate_Content:     {data['CarbohydrateContent']} g</Typography>
                            }
                            <Divider component="li" />
                            {data['CholesterolContent'] !== undefined &&
                                <Typography variant='h3'>CholesterolContent:     {data['CholesterolContent']} g</Typography>
                            }
                            <Divider component="li" />
                            {data['FatContent'] !== undefined &&
                                <Typography variant='h3'>FatContent:     {data['FatContent']} g</Typography>
                            }
                            <Divider component="li" />
                            {data['FiberContent'] !== undefined &&
                                <Typography variant='h3'>FiberContent:     {data['FiberContent']} g</Typography>
                            }
                            <Divider component="li" />
                            {data['SaturatedFatContent'] !== undefined &&
                                <Typography variant='h3'>SaturatedFatContent:     {data['SaturatedFatContent']} g</Typography>
                            }
                            <Divider component="li" />
                            {data['SodiumContent'] !== undefined &&
                                <Typography variant='h3'>SodiumContent:     {data['FatContent']} g</Typography>
                            }
                            <Divider component="li" />
                            {data['SugarContent'] !== undefined &&
                                <Typography variant='h3'>SugarContent:     {data['FiberContent']} g</Typography>
                            }
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {
                            data['RecipeInstructions'] != undefined && data['RecipeInstructions'].map((item, index) => {
                                return <Typography variant='body1'>{index}. {item}</Typography>
                            })}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        {data['RecipeIngredientParts'] != undefined && data['RecipeIngredientParts'].map((item, index) => {
                            return <>  <Typography variant='h3'>{index}. {item}</Typography> <Divider component="li" /></>
                        })}
                    </TabPanel>
                </Box>
            </MKBox>
            <NavigationButton left="/diet/recipe" />
        </MKBox>
    );
}

export default Content;
