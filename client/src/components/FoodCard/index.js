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
        <Card sx={{
            marginBottom: '3%',
            borderRadius: 2,
            boxShadow: 3,
            borderColor: 'grey.300',
            bgcolor: 'background.paper',
            m: 2,
            p: 2,
        }}>
            <CardContent>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            {data['food name']}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container direction="column" spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                    GI_index_level:
                                </Typography>
                                <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: getColorForGI(data['GI_index']) }}>
                                    {data['GI_index_level']}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                    GI_index:
                                </Typography>
                                <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: getColorForGI(data['GI_index']) }}>
                                    {data['GI_index']}
                                </Typography>
                            </Grid>


                            <Grid item>
                                <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                    GL_index:
                                </Typography>
                                <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: getColorForGL(data['GL_index']) }}>
                                    {data['GL_index']}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
