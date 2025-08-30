
import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './pages/Home'
import LayoutOne from './layout/LayoutOne'
import About from './pages/About'
import Sellercomponents from './pages/Sellercomponents'
import Login from './pages/Login'
import Resigter from './pages/Resigter'
import CheckOut from './pages/CheckOut'
import AboutProducts from './components/AboutProducts'
import { ToastContainer } from 'react-toastify';
  
const App = () => {

  const myRouter = createBrowserRouter(createRoutesFromElements(
 <Route>
  
      <Route path='/' element={<LayoutOne />}>   
      <Route index element={<Home/>}/>
      <Route path='/About' element={<About />} />
      <Route path='/Sellercomponents' element={<Sellercomponents />}/>
      <Route path='/Login' element={<Login />} />
      <Route path='/Resigter' element={<Resigter />} />
      <Route path='/CheckOut' element={<CheckOut />} />
      <Route path='/AboutProducts/:productId' element={<AboutProducts />} />
      </Route>
    
 </Route>
  ))

  return (
    <>
  <ToastContainer />
    <RouterProvider router={myRouter} />
    
    </>
  )
}

export default App