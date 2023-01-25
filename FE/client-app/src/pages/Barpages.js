import '../App.css';
import { Application, Dashboard, Download, Setting, Submission, Logout, IRform, CRform, FRform } from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Barpages= () => {
  return (
  <BrowserRouter>
  <Sidebar>
  <Routes>
    <Route path ="/dashboard"element={<Dashboard/>}/>
    <Route path ="/application"element={<Application/>}/>
    <Route path ="/download"element={<Download/>}/>
    <Route path ="/setting"element={<Setting/>}/>
    <Route path ="/submission"element={<Submission/>}/>
    <Route path ="/logout"element={<Logout/>}/>
    <Route path ="/irform"element={<IRform/>}/>
    <Route path ="/crform"element={<CRform/>}/>
    <Route path ="/frform"element={<FRform/>}/>
  </Routes>
  </Sidebar>
  </BrowserRouter>
  );
}

export default Barpages;