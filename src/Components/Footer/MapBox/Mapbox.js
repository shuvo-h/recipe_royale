import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1dm8tbWFwIiwiYSI6ImNrdjNhdDVweDhlM3EycG1ucXFyemJmZWYifQ.7H-duckna5OQTKXtshRgoQ';

const Mapbox = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.3636, 23.8070],
            zoom: 15
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])
    return (
        <div className="map-container">
            <div id="map"></div>
        </div>
    );
};

export default Mapbox;