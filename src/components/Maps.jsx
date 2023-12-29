import React from 'react'
import '../components/style.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export const Maps = () => {

    const markers = [
        {
            geocode: [48.86, 2.3522],
            popUp: "Hello, i am pop up 1"
        },
        {
            geocode: [48.85, 2.3522],
            popUp: "Hello! i am pop up 2"
        }
    ]

    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>

    )
}
