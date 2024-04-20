import React , {useContext , useState} from 'react';
import './banner.css';
import { AppContext } from '../App';

function Banner() {
    const {data:cars , setData:setCars} = useContext(AppContext); 
  return (
    <div className="banner">
        {
            cars && 
            cars.length>0 &&
            cars.slice(0 , 5).map( /*when adding more cars data we have to edit here */
                car=>(
                    <div 
                        key={car._id} 
                        className={`slide ${car.active ? 'active' : undefined}`}
                    >
                        <div className="container-fluid">
                            <div className="row banner-top">
                                <div className="col-lg-4 p-0 banner-top-left">
                                    <div className="banner-title">
                                        <h1>Get Your Dream {car.make} </h1>
                                        <span className='slide-number'>0{car._id}</span>
                                    </div>
                                </div>
                                <div className="col-lg-8 p-0 banner-top-right"></div>
                            </div>
                            <div className="row banner-bottom">
                                <div className="col-lg-4 p-0"></div>
                                <div className="col-lg-5 p-0"></div>
                                <div className="col-lg-3 p-0"></div>
                            </div>
                        </div>
                    </div>
                )
            )
        }
    </div>
  );
}

export default Banner