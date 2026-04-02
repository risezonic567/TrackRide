
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TrainRoutes from './pages/TrainRoutes'
import AboutUsPage from './pages/AboutPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import HomePage from './pages/HomePage'

export default function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/#about' element={<AboutUsPage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>

      <Route path='/train-routes' element={<TrainRoutes/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
  )
}
