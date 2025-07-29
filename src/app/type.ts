export type MarkerData = {
  position: [number, number];
  popupText?: string;
  regionId: string;
};

export type RegionMarker = {
  id: string;
  position: [number, number];
  popupText?: string;
  zoomLevel: number;
}

