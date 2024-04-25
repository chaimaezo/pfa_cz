import React from 'react';
import { useParams } from 'react-router-dom';
import './vehicleDetails.css';

function VehicleDetails() {
  const { id } = useParams();
  return (
    <div>VehicleDetails - ID :  {id}</div>
  )
}

export default VehicleDetails