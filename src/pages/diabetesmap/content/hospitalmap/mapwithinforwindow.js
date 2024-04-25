import React, { useState } from 'react';
import {
    AdvancedMarker,
    InfoWindow,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import MKTypography from 'components/MKTypography';

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
                    maxWidth={400}
                    onCloseClick={() => setInfowindowOpen(false)}>
                    <MKTypography variant="h6">{props.name}</MKTypography>
                    <MKTypography variant="body2">{props.sector}</MKTypography>
                    <MKTypography variant="body3">State: {props.state}</MKTypography>
                    <br/>
                    <MKTypography variant="body3">Phone: {props.phone}</MKTypography>
                </InfoWindow>
            )}
        </>
    );
};
