import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import locationBoundary from "../data/boundary.json";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#333333", visibility: "simplified" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#2F2F2F" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#F0F0F0" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#1C1C1C" }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#F0F0F0" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#1C1C1C" }],
  },
];

const myLocation = {
  lat: 45.0,
  lng: -89.5,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={{
          height: "35vh",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
        zoom={5.7}
        center={myLocation}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
        }}
      >
        <Polygon
          path={locationBoundary}
          options={{
            fillColor: "#F0F0F0",
            fillOpacity: 0.1,
            strokeColor: "#FFD700",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
