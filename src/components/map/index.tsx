'use client'; // Важно для использования клиентских API

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const isBrowser = typeof window !== 'undefined';


const DefaultIcon = L.icon({
  iconUrl: '/images/map/marker-icon.png',
  iconRetinaUrl: '/images/map/marker-icon-2x.png',
  shadowUrl: '/images/map/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapControllerProps {
  center: [number, number];
  zoom: number;
}

const MapController = ({ center, zoom }: MapControllerProps) => {
  const map = useMap();

  useEffect(() => {
    if (center && zoom) {
      map.flyTo(center, zoom, {
        duration: 1,
      });
    }
  }, [center, zoom, map]);

  return null;
};

interface InteractiveMapProps {
  center: [number, number];
  zoom: number;
  markers: Array<{
    position: [number, number];
    popupText: string;
  }>;
}

export const InteractiveMap = ({ center, zoom, markers }: InteractiveMapProps) => {
  // Инициализация иконки один раз
  useEffect(() => {
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <div className="h-[450px] w-full rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        placeholder={<div className="h-full w-full bg-gray-200 animate-pulse" />}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <MapController center={center} zoom={zoom} />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.popupText}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};