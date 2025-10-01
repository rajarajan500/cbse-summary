import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hader from './components/Hader'
import Body from './components/Body'
import GradeCard from './components/GradeCard'
import G6mat from './components/G6mat'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import G6sci from './components/G6sci'
import G6eng from './components/G6eng'
import G6ss from './components/G6ss'
import G7mat from './components/G7mat'
import G7sci from './components/G7sci'
import G7eng from './components/G7eng'
import G7ss from './components/G7ss'
import G8mat from './components/G8mat'
import G8sci from './components/G8sci'
import G8eng from './components/G8eng'
import G8ss from './components/G8ss'
import G9mat from './components/G9mat'
import G9sci from './components/G9sci'
import G9eng from './components/G9eng'
import G9ss from './components/G9ss'
import G10mat from './components/G10mat'
import G10sci from './components/G10sci'
import G10eng from './components/G10eng'
import G10ss from './components/G10ss'
import G11mat from './components/G11mat'
import G11sci from './components/G11sci'
import G11eng from './components/G11eng'
import G11cs from './components/G11cs'
import G12mat from './components/G12mat'
import G12sci from './components/G12sci'
import G12eng from './components/G12eng'
import G12cs from './components/G12cs'


function App() {


  return (
    <>
    <BrowserRouter>
    <Hader/>
    
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/G6mat" element={<G6mat />} />
        <Route path="/G6sci" element={<G6sci />} />
        <Route path="/G6eng" element={<G6eng />} />
        <Route path="/G6ss" element={<G6ss />} />
        <Route path="/G7mat" element={<G7mat />} />
        <Route path="/G7sci" element={<G7sci />} />
        <Route path="/G7eng" element={<G7eng />} />
        <Route path="/G7ss" element={<G7ss />} />
        <Route path="/G8mat" element={<G8mat />} />
        <Route path="/G8sci" element={<G8sci />} />
        <Route path="/G8eng" element={<G8eng />} />
        <Route path="/G8ss" element={<G8ss />} />
        <Route path="/G9mat" element={<G9mat />} />
        <Route path="/G9sci" element={<G9sci />} />
        <Route path="/G9eng" element={<G9eng />} />
        <Route path="/G9ss" element={<G9ss />} />
        <Route path="/G10mat" element={<G10mat />} />
        <Route path="/G10sci" element={<G10sci />} />
        <Route path="/G10eng" element={<G10eng />} />
        <Route path="/G10ss" element={<G10ss />} />
        <Route path="/G11mat" element={<G11mat />} />
        <Route path="/G11sci" element={<G11sci />} />
        <Route path="/G11eng" element={<G11eng />} />
        <Route path="/G11cs" element={<G11cs />} />   
        <Route path="/G12mat" element={<G12mat />} />
        <Route path="/G12sci" element={<G12sci />} />
        <Route path="/G12eng" element={<G12eng />} />
        <Route path="/G12cs" element={<G12cs />} />
      </Routes>
   
    </BrowserRouter>
    

    </>
  )
}

export default App
