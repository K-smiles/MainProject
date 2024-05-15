import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

export default function RecipeCard({ data }) {
    return (
        <Box sx={{
            marginBottom: '3%', borderRadius: 1, borderColor: 'black',
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
        }} >
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
                        <Link to={"/recipe/detail/" + data['RecipeId']}>
                            <Button variant="contained" style={{ width: '120px', height: '50px', fontSize: '1rem', backgroundColor: '#fff', color: '#1A73E83' }} startIcon={<ArrowForwardIcon />}>
                                Detail
                            </Button>
                        </Link>
                    </CardActions>
                </Box>
            </Card>
        </Box>
    );
}
