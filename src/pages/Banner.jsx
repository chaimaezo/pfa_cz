import React , {useContext , useState} from 'react'
import './banner.css'
import { AppContext } from '../App'
function Banner() {
  const {data : cars , setData:setCars} = useContext(AppContext)
  return (
    <div className='banner'>
      {cars && 
        cars.length > 0 && 
        cars.slice(0, 5).map(car=>(
          <div key={car._id} className="slide">
            <h1>{car.title}</h1>
          </div>
        )
      )}
    </div>
  );
};

export default Banner;