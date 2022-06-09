import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import './map-container.css';

function getIcon(size, zoom) {
    const _IconSize = size - zoom;
    return L.icon({
        iconUrl: require('../../images/icon-location.png'),
        iconSize: _IconSize,
    });
}

function SetView({ coordinates }) {
    const [position, setPosition] = useState(null);
    const map = useMap();
    useEffect(() => {
        if (coordinates !== undefined) {
            map.setView([coordinates.lat, coordinates.lng]);
            setPosition([coordinates.lat, coordinates.lng]);
        }
    }, [map, coordinates]);

    return position === null ? null : (
        <Marker position={position} icon={getIcon(50, map.getZoom())}>
            <Popup>Loaction is here</Popup>
        </Marker>
    );
}

function Map({ coordinates }) {
    return (
        <>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={true}
                className="map-container"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SetView coordinates={coordinates} />
            </MapContainer>
        </>
    );
}

export default Map;
