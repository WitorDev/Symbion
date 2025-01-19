import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: '/assets/search.png', // Replace with the path to your custom icon
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
  popupAnchor: [0, -32] // Set the anchor point for the popup
});

const Map = ({ height, width }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) {
      return;
    }

    // Londrina's coordinates
    const londrinaCoordinates = { lat: -23.3103, lng: -51.1628 };

    // Initialize the map with Londrina's coordinates
    mapInstanceRef.current = L.map(mapRef.current).setView([londrinaCoordinates.lat, londrinaCoordinates.lng], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstanceRef.current);

    // Add a marker with the custom icon at Londrina's coordinates
    L.marker([londrinaCoordinates.lat, londrinaCoordinates.lng], { icon: customMarkerIcon }).addTo(mapInstanceRef.current)
      .bindPopup('The Symbion Company.')
      .openPopup();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div className='mt-2 border-8 border-white rounded-lg' ref={mapRef} style={{ height: height, width: width }} />;
};

export default Map;
