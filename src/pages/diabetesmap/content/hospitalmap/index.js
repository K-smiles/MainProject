import React, { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { MarkerWithInfowindow } from './mapwithinforwindow';
import axios from "axios";
const baseURL = "http://localhost:5000/hospitals";

const HospitalGoogleMap = () => {

    const [data, setData] = useState([])
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data)
            console.log(data)
        }, []);
    }, [])

    return (
        <APIProvider apiKey="AIzaSyDPKLutsxSa78IFodEqzbZTncyZZB7jovM" language="en" libraries={['marker']}>
            <Map
                mapId={'bf51a910020fa25a'}
                style={{ width: '100%', height: '100%' }}
                defaultCenter={{ lat: -37.745, lng: 144.523 }}
                defaultZoom={7}
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
        </APIProvider>);
};

export default HospitalGoogleMap