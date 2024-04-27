import React, {useEffect , useState} from 'react';
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
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div id="vehicle-details" className="page vehicle-details">
      <img src={car.pageBgImg} alt="" className="img-fluid page-img"/>
    </div>
  );
}

export default VehicleDetails;