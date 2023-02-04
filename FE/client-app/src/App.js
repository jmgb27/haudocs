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
    <Route exact path ="/"element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
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
    </Routes>
    <Routes>
    <Route path ="/dashboard"element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    <Route path ="/application"element={<ProtectedRoute><Application/></ProtectedRoute>}/>
    <Route path ="/download"element={<ProtectedRoute><Download/></ProtectedRoute>}/>
    <Route path ="/setting"element={<ProtectedRoute><Setting/></ProtectedRoute>}/>
    <Route path ="/submission"element={<ProtectedRoute><Submission/></ProtectedRoute>}/>
    <Route path ="/logout"element={<ProtectedRoute><Logout/></ProtectedRoute>}/>
  </Routes>
  </BrowserRouter>
  </AuthProvider>
  </AuthContextProvider>


  );  
  
} 

export default App;