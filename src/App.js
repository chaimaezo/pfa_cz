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
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import LikedCarsList from './pages/LikedCarsList';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Profile from './pages/Profile';
import RaceCalendar from './pages/RaceCalendar';
import TeamPages from './pages/TeamPages';

export const AppContext = React.createContext(); 


function App() {
  const [data , setData] = useState([])
  const [selectedCar, setSelectedCar] = useState(null);
  const [likedCars, setLikedCars] = useState([]);
  const [user] = useAuthState(auth);

  const fetchData = ()=> {
    fetch('http://localhost:3000/api/vehiclesData.json')
    .then(res => res.json())
    .then(data =>setData(data))
    .catch(e=> console.log(e.message));
  };

  useEffect(()=>{
    fetchData();
  }, []);

  useEffect(() => {
    if (user) {
      const savedLikedCars = localStorage.getItem(`likedCars_${user.uid}`);
      setLikedCars(savedLikedCars ? JSON.parse(savedLikedCars) : []);
    } else {
      setLikedCars([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`likedCars_${user.uid}`, JSON.stringify(likedCars));
    }
  }, [likedCars, user]);

  return (
    <>
      <AppContext.Provider value={{data, setData, selectedCar, setSelectedCar ,likedCars, setLikedCars}}>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/vehicles" element ={
                                                  <ProtectedRoute>
                                                    <VehiclesList />
                                                  </ProtectedRoute>
                                                } />
          <Route exact path="/vehicles/:id" element ={
                                                      <ProtectedRoute>
                                                        <Banner />
                                                      </ProtectedRoute>
                                                       } />
          <Route exact path="/vehicle-details/:id" element={
                                                            <ProtectedRoute>
                                                              <VehicleDetails />
                                                            </ProtectedRoute>
                                                            } /> 
          <Route exact path="/MotoSport" element={
                                                  <ProtectedRoute>
                                                    <MotorsportsPage />
                                                  </ProtectedRoute>
                                                  } />
          <Route path="/race-calendar" element={<ProtectedRoute><RaceCalendar /></ProtectedRoute>} />
          <Route path="/team-pages" element={<ProtectedRoute><TeamPages /></ProtectedRoute>} />

          <Route exact path="/liked-cars" element={
                                                  <ProtectedRoute>
                                                    <LikedCarsList />
                                                  </ProtectedRoute>
                                                } />
          <Route exact path="/profile" element={
                                                <ProtectedRoute>
                                                  <Profile />
                                                </ProtectedRoute>
                                                } />
        
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppContext.Provider>
    </>
    
  );
}

export default App;
