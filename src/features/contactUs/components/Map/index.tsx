'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
const customIcon = L.icon({
    iconUrl: '/assets/icons/marker.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

const azadiCoordinates: [number, number] = [35.712552, 51.360432];

export default function MapAzadi() {

    return (
        <MapContainer
            center={azadiCoordinates}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            />
            <Marker position={azadiCoordinates} icon={customIcon}>
                <Popup>میدان آزادی، تهران</Popup>
            </Marker>
        </MapContainer>
    );
}
