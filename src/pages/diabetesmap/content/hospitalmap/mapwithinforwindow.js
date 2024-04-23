import React, { useState } from 'react';
import {
    AdvancedMarker,
    InfoWindow,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

export const MarkerWithInfowindow = (props) => {

    const [infowindowOpen, setInfowindowOpen] = useState(false);
    
    const [markerRef, marker] = useAdvancedMarkerRef();

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                onClick={() => setInfowindowOpen(true)}
                position={{ lat: props.lat, lng: props.lng }}
                title={props.name}
            />
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                    onCloseClick={() => setInfowindowOpen(false)}>
                        {props.desc}
                </InfoWindow>
            )}
        </>
    );
};
