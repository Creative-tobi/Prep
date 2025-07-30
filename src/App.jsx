import LandingPage from './components/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from "react";
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
