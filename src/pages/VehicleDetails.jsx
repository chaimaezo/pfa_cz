import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './vehicleDetails.css';

function VehicleDetails() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const index = parseInt(id) - 1;

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000/api/vehiclesData.json')
        .then((res) => res.json())
        .then((data) => setCar(data[index]))
        .catch((e) => console.log(e.message));
    };
    fetchData();
  }, [id, index]);

  useEffect(() => {
    if (car.bannerImg) {
      const img = new Image();
      img.src = car.bannerImg;
      img.onload = () => {
        const color = getAverageColor(img);
        const brightness = getBrightness(color);
        document.documentElement.style.setProperty('--text-color', brightness > 128 ? '#000' : '#fff');
        document.documentElement.style.setProperty('--bg-color', brightness > 128 ? '#fff' : '#000');
      };
    }
  }, [car]);

  const getAverageColor = (img) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);
    const imageData = context.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;
    let r = 0, g = 0, b = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
    }

    r = Math.floor(r / (data.length / 4));
    g = Math.floor(g / (data.length / 4));
    b = Math.floor(b / (data.length / 4));

    return { r, g, b };
  };

  const getBrightness = (color) => {
    return (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
  };

  return (
    <div id="vehicle-details" className="page vehicle-details">
      <div className="container">
        <div className="details-main">
          <img src={car.bannerImg} alt={car.title} className="img-fluid details-img-banner" />
          <div className="price">
            ${car.price && car.price.toLocaleString('en-US')}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 details-images">
            <img src={car.rightImg} alt="Additional 1" className="img-fluid additional-img" />
            <img src={car.leftImg} alt="Additional 2" className="img-fluid additional-img" />
          </div>
          <div className="col-lg-6 details-info">
            <div className="car-details">
              <h2>{car.title}</h2>
              <p>{car.description}</p>
              <div className="specifications">
                <h3>Specifications</h3>
                <ul>
                  <li><strong>Year:</strong> {car.year}</li>
                  <li><strong>Make:</strong> {car.make}</li>
                  <li><strong>Model:</strong> {car.model}</li>
                  <li><strong>Category:</strong> {car.category}</li>
                  <li><strong>Type:</strong> {car.type}</li>
                  <li><strong>Power:</strong> {car.power}</li>
                  <li><strong>Engine:</strong> {car.engine}</li>
                  <li><strong>Transmission:</strong> {car.transmission}</li>
                  <li><strong>Odometer:</strong> {car.odometer} miles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
