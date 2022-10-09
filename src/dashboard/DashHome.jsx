import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeForm from './employee/EmployeeForm'

const DashHome = () => {
  return (
    <div>
        <Routes>
            <Route to="/EmployeeForm" element={<EmployeeForm/>}/>
        </Routes>
      
    </div>
  )
}

export default DashHome
