import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import locationBoundary from "../data/boundary.json";
import { GeoPoints } from "../types/Utils";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const boundaryPoints: GeoPoints[] = locationBoundary;

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "var(--secondary-color)" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "var(--secondary-color)" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "var(--tertiary-color)" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "var(--secondary-color)" }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "var(--secondary-color)" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "var(--secondary-color)" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "var(--tertiary-color)" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "var(--quaternary-color)" }],
  },
];

const myLocation = {
  lat: 44.5,
  lng: -89.5,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={{
          height: "35vh",
          width: "100%", // Ensure the map takes up the full width
        }}
        zoom={6}
        center={myLocation}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
        }}
      >
        <Polygon
          path={boundaryPoints}
          options={{
            fillColor: "var(--primary-color)",
            fillOpacity: 0.5,
            strokeColor: "var(--primary-color)",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
