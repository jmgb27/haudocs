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
    <Route path ="/dashboard"element={<Dashboard/>}/>
    <Route path ="/application"element={<Application/>}/>
    <Route path ="/archiving"element={<Archiving/>}/>
    <Route path ="/tracking"element={<Tracking/>}/>
    <Route path ="/transfer"element={<Transfer/>}/>
    <Route path ="/users"element={<Users/>}/>
    <Route path ="/logout"element={<Logout/>}/>
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