import './App.css';
import FondecranComp from './components/FondecranComp';
import HeaderComp from './components/HeaderComp';
import React, { useState, useEffect } from 'react';
import LoadingComp from './components/LoadingComp';
import LandingPage from './Pages/LandingPage';
function App() {

  let [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [])
  return (
    <>
    { !loading ? <LoadingComp /> : '' }
    <FondecranComp />
    <HeaderComp />
    <LandingPage />
    
      
    </>
  );
}

export default App;
