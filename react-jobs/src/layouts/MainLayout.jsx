import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <ToastContainer autoClose={1000}/>
    </>
  )
}

export default MainLayout