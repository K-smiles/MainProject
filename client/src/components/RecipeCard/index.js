import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

export default function RecipeCard({ data }) {
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <Link to={"/recipe/detail/" + data['RecipeId']}>
            <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <CardActionArea sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={data['Images']}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data['Name']}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Calories: {data['Calories']} cal<br />
                                    FatContent: {data['FatContent']}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Box>

                    <Box>
                        {hovered && <KeyboardArrowRightIcon fontSize='large' />}
                    </Box>

                </CardActionArea>

            </Card>
        </Link>
    );
}