import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import {MarkerData, RegionMarker} from "@/app/type";

const DefaultIcon = L.icon({
  iconUrl: '/images/map/marker-icon.png',
  iconRetinaUrl: '/images/map/marker-icon-2x.png',
  shadowUrl: '/images/map/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
L.Marker.prototype.options.icon = DefaultIcon


interface Props {
  markers: MarkerData[],
  regions: RegionMarker[],
}

export const HomeMap =({ markers, regions }: Props)=> {
  const center: [number, number] = [42.8746, 74.5698]

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {markers.map((marker, index) => (
        <Marker position={marker.position} key={index}>
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}