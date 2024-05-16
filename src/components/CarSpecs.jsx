import React from 'react'
import './carSpecs.css';

function CarSpecs({ car }) {
  return (
    <div className="car-specs">
        <ul>
          <li><strong>Power:</strong> {car.power}</li>
          <li><strong>Engine:</strong> {car.engine}</li>
          <li><strong>Transmission:</strong> {car.transmission}</li>
        </ul>
      </div>
  )
}


export default CarSpecs