import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import '../styles.css';

interface CallBack {
  setSelectedPosition: Function;
  selectedPosition: [number, number];
}

const CreatePointMapa: React.FC<CallBack> = (props) => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleMapClick(e: LeafletMouseEvent) {
    props.setSelectedPosition([e.latlng.lat, e.latlng.lng]);
  }

  return (
    <Map center={initialPosition ? initialPosition : [-22.9343838, -47.048581]} zoom={16} onClick={handleMapClick}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.selectedPosition} />
    </Map >
  );
}

export default CreatePointMapa;