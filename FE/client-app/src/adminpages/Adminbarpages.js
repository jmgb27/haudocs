import '../App.css';
import { Application, Dashboard, Archiving, Tracking, Transfer, Users, Logout } from '../adminpages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminsidebar from './Adminsidebar';
import IRforms from '../pages/forms/irforms/IRforms';
import CRforms from '../pages/forms/crforms/CRforms';
import FRforms from '../pages/forms/frforms/FRforms';

const Adminbarpages= () => {
  return (
  <BrowserRouter>
  <Adminsidebar>
  <Routes>
    <Route path ="/Admindashboard"element={<AdminDashboard/>}/>
    <Route path ="/Adminapplication"element={<AdminApplication/>}/>
    <Route path ="/Adminarchiving"element={<AdminArchiving/>}/>
    <Route path ="/Admintracking"element={<AdminTracking/>}/>
    <Route path ="/Admintransfer"element={<AdminTransfer/>}/>
    <Route path ="/Adminusers"element={<AdminUsers/>}/>
    <Route path ="/Adminlogout"element={<AdminLogout/>}/>
  </Routes>
  <Routes>
    <Route path ="/dashboard/irforms"element={<IRforms/>}/>
    <Route path ="/dashboard/crforms"element={<FRforms/>}/>
    <Route path ="/dashboard/frforms"element={<CRforms/>}/>
  </Routes>
  </Adminsidebar>
  </BrowserRouter>
  );
}

export default Adminbarpages;