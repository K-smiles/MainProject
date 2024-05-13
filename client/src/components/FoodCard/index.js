import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FoodDialog from 'components/FoodDialog';
import { Button, Grid } from "@mui/material";

export default function FoodCard({data}) {
    return (
        <Grid item xs={12} style={{ marginBottom: '3%' }}> {/* Wrapper Grid to add margin bottom */}
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                        <Typography component="div" variant="h4">
                            {data['food name']}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" >
                            {data['category']}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" >
                            {data['sub_category']}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <FoodDialog data={data}/>
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    );
}
