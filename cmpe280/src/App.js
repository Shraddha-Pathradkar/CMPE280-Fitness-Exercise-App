import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatpopup from './components/ChatPopup';
import GoogleMaps from './components/GoogleMaps';
import LoginPage from './components/LoginPage';
import Appointments from './components/Appointments';
import Plans from './components/Plans';
// import LoginPage from './components/LoginPage';


const App = () => {
  const location = useLocation()

  return (

    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/nearby-gym" element={<GoogleMaps />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sheduled-appointments" element={<Appointments />} />
        <Route path="/our-plans" element={<Plans />} />
      </Routes>

      {location.pathname !== "/login" && <Chatpopup />}
      {location.pathname !== "/login" && <Footer />}

    </Box>
  )
};

export default App;
