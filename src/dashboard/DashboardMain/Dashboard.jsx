import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeForm from '../employee/EmployeeForm'
import SideBar from '../SideBar/SideBar'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='rowC'>
       
    
        <SideBar/>
       
        <Routes>
            <Route path='/EmployeeForm' element={< EmployeeForm/>} />
        </Routes>
        
      
    </div>
  )
}

export default Dashboard
