import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App.js';
import './VehiclesList.css';
import SearchBar from '../components/SearchBar';

const LikedCarsList = () => {
  const { likedCars, setSelectedCar } = useContext(AppContext);
  const navigate = useNavigate();
  const [filteredCars, setFilteredCars] = useState(likedCars);

  useEffect(() => {
    setFilteredCars(likedCars);
  }, [likedCars]);

  const handleCarClick = (carId) => {
    const car = likedCars.find(c => c._id === carId);
    setSelectedCar(car);
    navigate(`/vehicles/${car._id}`);
  };

  const handleSearch = (filters) => {
    const { brand, model, category } = filters;
    const filtered = likedCars.filter(car => 
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
              <button
                className="like-button"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="bi bi-heart-fill"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedCarsList;
