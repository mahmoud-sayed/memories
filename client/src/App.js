import React from 'react';
import { Container } from '@mui/material';


// imported components
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';



const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container >
    </BrowserRouter>
  );
};

export default App;