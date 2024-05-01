import React, { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import MKTypography from "components/MKTypography";
import MKBox from 'components/MKBox';
import MapHandler from './maphandler'
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import Sidebar from '../Sidebar';

const SearchGoogleMap = ({ updateOpen }) => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [isLocationLoaded, setLocationLoaded] = useState(false);

    useEffect(() => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            setLocationLoaded(true);
        } else {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setCurrentPosition({ lat: latitude, lng: longitude });
                    setLocationLoaded(true);
                },
                error => {
                    alert(`Location error: ${error.message}`);
                    setLocationLoaded(true);  // 同样设置为 true，允许地图加载
                }
            );
        }
    }, []);

    useEffect(() => {
        updateOpen();
    }, [])
    return (
        <>
            <Grid item>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={8} md={10}>
                        <MKTypography variant="h3" fontWeight="bold" >
                            How can I quickly find all the GPs near me？
                            Don't worry about it. We can find them for you automatically!
                        </MKTypography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <MKBox
                    mx={-1}
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
                            xs: 150, // theme.breakpoints.up('xs')
                            sm: 250, // theme.breakpoints.up('sm')
                            md: 350, // theme.breakpoints.up('md')
                            lg: 450, // theme.breakpoints.up('lg')
                            xl: 500, // theme.breakpoints.up('xl')
                            xxl: 600
                        },
                    }}
                >
                    <APIProvider apiKey="AIzaSyDPKLutsxSa78IFodEqzbZTncyZZB7jovM" language="en" libraries={['places']}>
                        {isLocationLoaded && (
                            <Map
                                style={{ width: '100%', height: '90%' }}
                                defaultCenter={currentPosition || { lat: -37.745, lng: 144.523 }}
                                defaultZoom={15}
                                gestureHandling={'greedy'}
                                disableDefaultUI
                            >
                                {currentPosition && <MapHandler currentPosition={currentPosition} />}
                            </Map>
                        )}
                    </APIProvider>
                </MKBox>
            </Grid>

        </>
    );
};

export default SearchGoogleMap;