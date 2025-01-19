import React, { useEffect, useRef } from 'react';
import L, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

    // Add a marker at Londrina's coordinates
    L.marker([londrinaCoordinates.lat, londrinaCoordinates.lng]).addTo(mapInstanceRef.current)
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
