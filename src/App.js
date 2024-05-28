import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import {Routes , Route} from 'react-router-dom';

import React, {useState , useEffect} from 'react';

import './App.css';
import VehiclesList from './pages/VehiclesList';
import Header from './components/Header';
import MotorsportsPage from './pages/MotorsportsPage';
import HomePage from './pages/HomePage';
import Banner from './pages/Banner';
import VehicleDetails from './pages/VehicleDetails';


export const AppContext = React.createContext(); 


function App() {
  const [data , setData] = useState([])
  const [selectedCar, setSelectedCar] = useState(null);

  const fetchData = ()=> {
    fetch('http://localhost:3000/api/vehiclesData.json')
    .then(res => res.json())
    .then(data =>setData(data))
    .catch(e=> console.log(e.message));
  };

  useEffect(()=>{
    fetchData();
  }, []);


  return (
    <>
      <AppContext.Provider value={{data, setData, selectedCar, setSelectedCar}}>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/vehicles" element ={<VehiclesList />} />
          <Route exact path="/vehicles/:id" element ={<Banner />} />
          <Route exact path="/vehicle-details/:id" element={<VehicleDetails />} /> 
          <Route exact path="/MotoSport" element={<MotorsportsPage />} />
        </Routes>
      </AppContext.Provider>
    </>
    
  );
}

export default App;
