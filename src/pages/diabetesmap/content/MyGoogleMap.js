import React, { useState } from 'react';
import { APIProvider, ControlPosition, Map, MapControl } from '@vis.gl/react-google-maps';
import { MarkerWithInfowindow } from './mapwithinforwindow';
import MapHandler from './maphandler'

import { PlaceAutocompleteClassic } from './autocomplete-classic';
const MyGoogleMap = () => {

    // const [selectedPlace, setSelectedPlace] =
    // useState<google.maps.places.PlaceResult>(null);

    const [selectedPlace, setSelectedPlace] =
        useState(null);

    return (<APIProvider apiKey="AIzaSyDPKLutsxSa78IFodEqzbZTncyZZB7jovM" libraries={['marker']}>
        <Map
            mapId={'bf51a910020fa25a'}
            style={{ width: '100%', height: '100%' }}
            defaultCenter={{ lat: -37.745, lng: 144.523 }}
            defaultZoom={7}
            gestureHandling={'greedy'}
            disableDefaultUI
        >

            <MapControl position={ControlPosition.TOP}>
                <div className="autocomplete-control">
                    <PlaceAutocompleteClassic onPlaceSelect={setSelectedPlace} />
                </div>
            </MapControl>

            {/* <MarkerWithInfowindow /> */}
        </Map>
        <MapHandler place={selectedPlace} />
    </APIProvider>);
};

export default MyGoogleMap