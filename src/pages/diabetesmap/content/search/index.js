import React, { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import MapHandler from './maphandler'

import { useEffect } from 'react';

const SearchGoogleMap = () => {
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

    return (
        <APIProvider apiKey="AIzaSyDPKLutsxSa78IFodEqzbZTncyZZB7jovM" language="en" libraries={['places']}>
            {isLocationLoaded && (
                <Map
                    style={{ width: '100%', height: '100%' }}
                    defaultCenter={currentPosition || { lat: -37.745, lng: 144.523 }}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI
                >
                    {currentPosition && <MapHandler currentPosition={currentPosition} />}
                </Map>
            )}
        </APIProvider>
    );
};

export default SearchGoogleMap;