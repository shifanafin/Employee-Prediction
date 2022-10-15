import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmployeeLogin from "./Login/Employee/EmployeeLogin";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Updates from "./pages/Updates";
import AdminLogin from "../src/Login/AdminLogin/AdminLogin";
import HrLogin from "./Login/HrLogin/HrLogin";
import Accounting from "./Login/Accouting/Accounting";
import ProjectLogin from "./Login/Project/ProjectLogin";
// import "../node_modules/react-bootstrap/dist/react-bootstrap.js"
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import EmployeeForm from "./dashboard/DashboardMain/EmployeeForm";
import Dashboard from "./dashboard/DashboardMain/Dashboard";
import EmployeeDetails from "./dashboard/DashboardMain/EmployeeDetails";
import HRreport from "./dashboard/DashboardMain/HRreport";
import Account from "./dashboard/DashboardMain/Account";
import ProjectAdmin from "./dashboard/DashboardMain/ProjectAdmin";
import EmployeeAdmin from "./dashboard/DashboardMain/EmployeeAdmin";





function App() {
  return (
    <div className="App">
     
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Updates" element={<Updates/>} />
      <Route path="/Project" element={<Project/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/EmployeeLogin" element={<EmployeeLogin/>} />
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/HrLogin" element={<HrLogin/>}/>
      <Route path="/Accounting" element={<Accounting/>}/>
      <Route path="/ProjectLogin" element={<ProjectLogin/>}/>
      <Route path='/EmployeeForm' element={<EmployeeForm/>} />
      <Route path="/EmployeeDetails" element={<EmployeeDetails/>} />
      <Route path="/Dashboard" element={<Dashboard/>}/>  
      <Route path="/HRreport" element={<HRreport/>}/>  
      <Route path="/Account" element={<Account/>}/>  
      <Route path="/ProjectAdmin" element={<ProjectAdmin/>}/>  
      <Route path="/EmployeeAdmin" element={<EmployeeAdmin/>}/>  


   </Routes>
<Footer/>
   
  
    </div>
  );
}

export default App;
