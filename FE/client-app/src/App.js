import React, {useEffect, useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Application, Download, Setting, Submission, Logout } from "./pages";
import { AuthContextProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ProtectedRoute from "./login/ProtectedRoute"
import Signin from "./login/auth/Signin";
import Signup from "./login/auth/Signup";
import { Navigate } from "react-router-dom";
import VerifyEmail from "./login/verifyemail/VerifyEmail";
import { AuthProvider } from "./context/Authvalue";
import Forgotpassword from "./login/auth/Forgotpassword";
import { AdminDashboard, AdminApplication, AdminArchiving, AdminTracking, AdminTransfer, AdminUsers, AdminLogout, AdminSettings } from "./adminpages";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  return (
  <AuthContextProvider>
    <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
    <BrowserRouter>
    <Routes>
    <Route exact path ="/"element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
    <Route path="/Signin" element={
            !currentUser?.emailVerified 
            ? <Signin/>
            : <Navigate to='/' replace/>
          } />
              <Route path="/Signup" element={
            !currentUser?.emailVerified 
            ? <Signup/>
            : <Navigate to='/' replace/>
          } />
    <Route path='/verifyemail' element={<VerifyEmail/>} /> 
    <Route path='/forgotpassword' element={<Forgotpassword/>} /> 
    </Routes>
    <Routes>
    <Route path ="/dashboard"element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    <Route path ="/application"element={<ProtectedRoute><Application/></ProtectedRoute>}/>
    <Route path ="/download"element={<ProtectedRoute><Download/></ProtectedRoute>}/>
    <Route path ="/setting"element={<ProtectedRoute><Setting/></ProtectedRoute>}/>
    <Route path ="/submission"element={<ProtectedRoute><Submission/></ProtectedRoute>}/>
    <Route path ="/logout"element={<ProtectedRoute><Logout/></ProtectedRoute>}/>
  </Routes>
    <Routes>
    <Route path ="/admindashboard"element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
    <Route path ="/adminapplication"element={<ProtectedRoute><AdminApplication/></ProtectedRoute>}/>
    <Route path ="/adminarchiving"element={<ProtectedRoute><AdminArchiving/></ProtectedRoute>}/>
    <Route path ="/admintracking"element={<ProtectedRoute><AdminTracking/></ProtectedRoute>}/>
    <Route path ="/admintransfer"element={<ProtectedRoute><AdminTransfer/></ProtectedRoute>}/>
    <Route path ="/adminusers"element={<ProtectedRoute><AdminUsers/></ProtectedRoute>}/>
    <Route path ="/adminsettings"element={<ProtectedRoute><AdminSettings/></ProtectedRoute>}/>
    <Route path ="/adminlogout"element={<ProtectedRoute><AdminLogout/></ProtectedRoute>}/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
  </AuthContextProvider>


  );  
  
} 

export default App;