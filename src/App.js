import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmployeeLogin from "./Login/Employee/EmployeeLogin";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";
import AdminLogin from "../src/Login/AdminLogin/AdminLogin";
import HrLogin from "./Login/HrLogin/HrLogin";
import Accounting from "./Login/Accouting/Accounting";
import ProjectLogin from "./Login/Project/ProjectLogin";



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Project" element={<Project/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/EmployeeLogin" element={<EmployeeLogin/>} />
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/HrLogin" element={<HrLogin/>}/>
      <Route path="/Accounting" element={<Accounting/>}/>
      <Route path="/ProjectLogin" element={<ProjectLogin/>}/>
      
    
      
    </Routes>
    
    <Footer/>
  
    </div>
  );
}

export default App;
