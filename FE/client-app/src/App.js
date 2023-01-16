import './App.css';
import { Application, Dashboard, Download, Setting, Submission, Logout } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Navbar } from './components';

const App = () => {
  return (
  <BrowserRouter>
  <Navbar />
  <Sidebar>
  <Routes>
    <Route path ="/dashboard"element={<Dashboard/>}/>
    <Route path ="/application"element={<Application/>}/>
    <Route path ="/download"element={<Download/>}/>
    <Route path ="/setting"element={<Setting/>}/>
    <Route path ="/submission"element={<Submission/>}/>
    <Route path ="/logout"element={<Logout/>}/>
  </Routes>
  </Sidebar>
  </BrowserRouter>
  );
}

export default App;
