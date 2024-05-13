import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import RecipeDialog from 'components/RecipeDialog'
export default function RecipeCard({ data }) {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: {
                            xs: 50,
                            md: 150
                        }
                    }}
                    image={data['Images']}
                    alt="imag loading"
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Typography component="div" variant="h4">
                        {data['Name']}
                    </Typography>
                </CardContent>
                <CardActions>
                    <RecipeDialog data={data}/>
                </CardActions>
            </Box>
        </Card>
    );
}
