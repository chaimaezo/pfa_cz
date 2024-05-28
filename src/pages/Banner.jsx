import React, { useContext, useEffect, useState } from 'react';
import './banner.css';
import { AppContext } from '../App';
import SlideBtn from '../components/SlideBtn';
import CarSpecs from '../components/CarSpecs';
import { Link, useParams } from 'react-router-dom';

function Banner() {
  const { data: cars, selectedCar, setSelectedCar } = useContext(AppContext);
  const { id } = useParams();
  const [video, setVideo] = useState(false);
  
  useEffect(() => {
    if (id && cars.length > 0) {
      const selected = cars.find(car => car._id === parseInt(id));
      setSelectedCar(selected);
    }
  }, [id, cars, setSelectedCar]);

  const toggleVideo = () => {
    setVideo(!video);
  };

  const handleSlideChange = (ind) => {
    if (ind >= cars.length - 1) {
      ind = -1;
    }
    setSelectedCar(cars[ind + 1]);
  };

  if (!selectedCar) {
    return <div>Loading...</div>;
  }

  return (
    <div className="banner">
      <div className="slide active">
        <div className="container-fluid">
          <div className="row banner-top">
            <div className="col-lg-4 p-0 banner-top-left">
              <div className="banner-title">
                <h1>Explore Your Dream {selectedCar.make}</h1>
                <span className='slide-number'>0{selectedCar._id}</span>
              </div>
              <SlideBtn index={cars.indexOf(selectedCar)} slideChange={handleSlideChange} />
            </div>
            <div className="col-lg-8 p-0 banner-top-right">
              <div className="banner-img">
                <img 
                  src={selectedCar.bannerImg} 
                  alt={selectedCar.make} 
                  className={`img-fluid ${video ? undefined : 'active'}`}
                />
                <video 
                  className={`banner-video ${video ? 'active' : undefined}`} 
                  src={selectedCar.video} 
                  autoPlay 
                  loop 
                  muted
                >
                </video>
                <div className="car-brief">
                  <div className="car-intro">
                    <CarSpecs car={selectedCar} />
                  </div>
                  <div className="car-nav">
                    <li>
                      <Link to={`/vehicle-details/${selectedCar._id}`}>
                        Details <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleVideo}>
                        {video ? 'Image' : 'Video'}{' '}
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/vehicles">
                        More Vehicles <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row banner-bottom">
            <div className="col-lg-4 p-0">
              <div className="banner-img">
                <img src={selectedCar.leftImg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 p-0">
              <div className="car-description">
                <h2>{selectedCar.title}</h2>
                <div className="car-features">
                  <p>{selectedCar.description}</p>
                  <Link to={`/vehicle-details/${selectedCar._id}`} className="detail-link text-center">
                    Explore Features <i className="bi bi-arrow-right-short"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-0">
              <img src={selectedCar.rightImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
