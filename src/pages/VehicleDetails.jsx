import React, {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './vehicleDetails.css';

function VehicleDetails() {
  const [car, setCar] = useState({})
  const { id } = useParams();
  const index = parseInt(id)-1

  const fetchData=()=>{
    fetch('http://localhost:3000/api/vehiclesData.json')
    .then(res => res.json())
    .then(data =>setCar(data[index]))
    .catch(e=> console.log(e.message));
  };
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div id="vehicle-details" className="page vehicle-details">
      <img src={car.pageBgImg} alt="" className="img-fluid page-img"/>
      <div className="container-fluid">
        <div className="col-lg-4 p-0 details-left">
          <img src={car.bannerImg} alt="" className='img-fluid details-img-left' />
          <div className="price">
            ${car.price && car.price.toLocaleString('en-US')}
            <span>Drive Away</span>
          </div>
        </div>
        <div className="col-lg-4 p-0 details-middle"></div>
        <div className="col-lg-4 p-0 details-right"></div>
      </div>
    </div>
  );
}

export default VehicleDetails;