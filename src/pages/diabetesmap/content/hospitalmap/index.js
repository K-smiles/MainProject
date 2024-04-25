import React, { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { MarkerWithInfowindow } from './mapwithinforwindow';
import MKTypography from "components/MKTypography";
import MKBox from 'components/MKBox';
import { Grid } from '@mui/material';
import axios from "axios";
import ClosestHosTable from './ClosestHosTable';

import { useEffect } from 'react';
import { Typography } from '@mui/material';

const baseURL = "https://backdiagui-affe16e7071c.herokuapp.com/hospitals";

const HospitalGoogleMap = () => {

    const [data, setData] = useState([])
    const [currentPosition, setCurrentPosition] = useState(null);
    const [isLocationLoaded, setLocationLoaded] = useState(false);

    useEffect(() => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            setLocationLoaded(true);  // 设置为 true 即使位置获取失败也能加载地图
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

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data)
        }, []);
    }, [])

    return (
        <>
            <Grid item>
                <MKTypography variant="h3" fontWeight="bold" >
                    Can I quickly find all the hospitals in Australia that have diabetes department?
                    Don't worry about it. We can find them for you automatically!
                </MKTypography>
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
                                mapId={'bf51a910020fa25a'}
                                style={{ width: '100%', height: '90%' }}
                                defaultCenter={{ lat: -27, lng: 135 }}
                                defaultZoom={4.5}
                                gestureHandling={'greedy'}
                                disableDefaultUI
                            >
                                <div>
                                    {
                                        data.map((item) => {
                                            return <MarkerWithInfowindow lat={parseFloat(item.Latitude)} lng={parseFloat(item.Longitude)}
                                                name={item.Name}
                                                sector={item.Sector}
                                                state={item.State}
                                                phone={item.Number}
                                            />
                                        })
                                    }
                                </div>
                            </Map>
                        )}
                    </APIProvider>
                </MKBox>
            </Grid>
            <Grid item>
                <MKBox
                >
                    <Typography variant='h1' mb={1}>
                        There are the 10 closest hospitals with you!
                    </Typography>

                    {isLocationLoaded && <ClosestHosTable lat={currentPosition.lat} lon={currentPosition.lng} />}
                </MKBox>
            </Grid>
        </>
    );
};

export default HospitalGoogleMap