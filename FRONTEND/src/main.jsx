
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from './components/Login'
import Signup from './components/Signup'
import './index.css'


createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

)
