// components/LeafletMap.js

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = ({ location }) => {
  const { title, address, mapLat = 60.1674, mapLng = 24.9414 } = location;

  return (
    <div className="pt-10">
      <MapContainer
        center={[mapLat, mapLng]}
        zoom={13}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[mapLat, mapLng]}>
          <Popup>
            {title}
            <br />
            {address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
