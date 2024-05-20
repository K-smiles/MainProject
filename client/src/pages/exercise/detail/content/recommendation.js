import * as React from 'react';
import MKBox from "components/MKBox";

import { Grid } from "@mui/material";

import { Stack } from '@mui/material';


import RecipeCard from 'components/RecipeCard';
import axios from 'axios';



function RecommendationRecipe({ id1, id2 }) {

    console.log(id1)
    console.log(id2)
    let baseURL = process.env.REACT_APP_BASEURL + "/recipes/";

    const [data1, setData1] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    //load data
    React.useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        let baseURL1 = baseURL + id1;
        axios({
            method: 'get',
            url: baseURL1,
        }).then((response) => {
            setData1(response.data)
        }, []);
        let baseURL2 = baseURL + id2;
        axios({
            method: 'get',
            url: baseURL2,
        }).then((response) => {
            setData2(response.data)
        }, []);
    }

    return (
        <MKBox mx={2} borderRadius="xl" shadow="lg"
            mt={{ xs: 1, sm: 2, md: 3 }}
            mb={{ xs: 1, sm: 2, md: 3 }} >
            <Grid container direction="row" justifyContent="center" spacing={3} alignItems="center" >
                <Grid item xs={12}>
                    <MKBox xs={12}>
                        <Stack spacing={2} mb={2}>
                            {
                                data1 != [] && data1.length != 0 &&
                                <RecipeCard data={data1} />
                            }
                            {
                                data2 != [] && data2.length != 0 &&
                                <RecipeCard data={data2} />
                            }
                        </Stack>
                    </MKBox>
                </Grid>
            </Grid>
        </MKBox>
    );
}

export default RecommendationRecipe;
