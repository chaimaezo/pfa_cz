import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App.js';
import './VehiclesList.css';
import SearchBar from '../components/SearchBar';

const VehiclesList = () => {
  const { data: cars, setSelectedCar } = useContext(AppContext);
  const [filteredCars, setFilteredCars] = useState(cars);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleCarClick = (carId) => {
    const car = cars.find(c => c._id === carId);
    setSelectedCar(car);
    navigate(`/vehicles/${car._id}`);
  };

  const handleSearch = (filters) => {
    const { brand, model, category } = filters;
    const filtered = cars.filter(car => 
      (brand === '' || car.make.toLowerCase().includes(brand.toLowerCase())) &&
      (model === '' || car.model.toLowerCase().includes(model.toLowerCase())) &&
      (category === '' || car.category.toLowerCase().includes(category.toLowerCase()))
    );
    setFilteredCars(filtered);
  };

  return (
    <div className="vehicles-list container">
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {filteredCars.map(car => (
          <div key={car._id} className="col-lg-4 col-md-6 mb-4">
            <div 
              className="vehicle-card" 
              onClick={() => handleCarClick(car._id)}
            >
              <img src={car.bannerImg} alt={car.make} className="img-fluid" />
              <h3 className="vehicle-name">{car.make}</h3>
              <h5 className="vehicle-name">{car.model}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclesList;
