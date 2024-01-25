import React from 'react'
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Featurepage1 from '../Pages/Featurepage1';
import Featurepage2 from '../Pages/Featurepage2';
import ErrorPage from '../Pages/ErrorPage';
import ErrorBoundary from '../Components/ErrorBoundary';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<ErrorBoundary>
                                     <Home />
                              </ErrorBoundary>} />
                              
      <Route path='/features' element={<Featurepage1 />} />
      <Route path='/Multifeatures' element={<Featurepage2 />} />
    
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Router