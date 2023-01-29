import '../App.css';
import { Application, Dashboard, Download, Setting, Submission, Logout } from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import IRforms from './forms/irforms/IRforms';
import CRforms from './forms/crforms/CRforms';
import FRforms from './forms/frforms/FRforms';

const Barpages= () => {
  return (
  <BrowserRouter>
  <Sidebar>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path ="/dashboard"element={<Dashboard/>}/>
    <Route path ="/application"element={<Application/>}/>
    <Route path ="/download"element={<Download/>}/>
    <Route path ="/setting"element={<Setting/>}/>
    <Route path ="/submission"element={<Submission/>}/>
    <Route path ="/logout"element={<Logout/>}/>
  </Routes>
  <Routes>
  <Route path ="/dashboard/irforms"element={<IRforms/>}/>
  <Route path ="/dashboard/crforms"element={<CRforms/>}/>
  <Route path ="/dashboard/frforms"element={<FRforms/>}/>
  </Routes>
  </Sidebar>
  </BrowserRouter>
  );
}

export default Barpages;