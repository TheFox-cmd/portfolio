export type Nav = "About" | "Resume" | "Projects" | "Contact";

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type GeoPoints = {
  lat: number;
  lng: number;
};