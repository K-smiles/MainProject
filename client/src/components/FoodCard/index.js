import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function FoodCard({ data }) {
    const getColorForGI = (gi) => {
        if (gi > 70) return 'red';
        if (gi > 55) return 'orange';
        return 'green'; // GI < 55
    };

    const getColorForGL = (gl) => {
        if (gl > 20) return 'red';
        if (gl >= 10) return 'orange';
        return 'green'; // GL < 10
    };
    return (
        <Box sx={{
            marginBottom: '3%', borderRadius: 1, borderColor: 'black',
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
        }} >

            <Grid container direction="row" spacing={3} mt={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={12} md={9} >
                    <Typography variant="h4">
                        {data['food name']}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid item xs={12} >GI_index: <Typography component="span" sx={{ color: getColorForGI(data['GI_index']) }}>{data['GI_index']}</Typography></Grid>
                    <Grid item xs={12} >GI_error_range: {data['GI_error_range']}</Grid>
                    <Grid item xs={12} >Carbohydrate: {data['Carbohydrate']}g</Grid>
                    <Grid item xs={12} >GL_index: <Typography component="span" sx={{ color: getColorForGL(data['GL_index']) }}>{data['GL_index']}</Typography></Grid>
                    <Grid item xs={12} >serving_size: {data['serving_size']}g</Grid>
                </Grid>

            </Grid>


        </Box>
    );
}
