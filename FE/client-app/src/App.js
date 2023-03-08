import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Application,
  Download,
  Setting,
  Submission,
  Logout,
  ReSubmission,
  Inbox,
} from "./pages";
import { AuthContextProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ProtectedRoute from "./login/ProtectedRoute";
import Signin from "./login/auth/Signin";
import Signup from "./login/auth/Signup";
import { Navigate } from "react-router-dom";
import VerifyEmail from "./login/verifyemail/VerifyEmail";
import { AuthProvider } from "./context/Authvalue";
import Forgotpassword from "./login/auth/Forgotpassword";
import {
  ReviewerDashboard,
  Reviewstatus,
  Reviewerlogout,
  Reviewersettings,
  AssignedProtocol,
} from "./reviewerpage";
import {
  AdminDashboard,
  AdminApplication,
  AdminArchiving,
  Adminsubmissions,
  AdminTransfer,
  AdminUsers,
  AdminLogout,
  AdminSettings,
} from "./adminpages";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore/lite";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("userData:", userData);
          setRole(userData.role);
          console.log("role:", userData.role);
        } else {
          console.log("User document not found");
        }
      } else {
        console.log("User not logged in");
      }
    });
  }, []);

  return (
    <AuthContextProvider>
      <AuthProvider value={{ role, currentUser, timeActive, setTimeActive }}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                role === "admin" ? (
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                ) : role === "reviewer" ? (
                  <ProtectedRoute>
                    <ReviewerDashboard />
                  </ProtectedRoute>
                ) : (
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                )
              }
            />
            <Route
              path="/Signin"
              element={
                !currentUser || !currentUser.emailVerified ? (
                  <Signin />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/Signup"
              element={
                !currentUser || !currentUser.emailVerified ? (
                  <Signup />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route path="/verifyemail" element={<VerifyEmail />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />

            {/* APPLICANTS ROUTES */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/application"
              element={
                <ProtectedRoute>
                  <Application />
                </ProtectedRoute>
              }
            />
            <Route
              path="/download"
              element={
                <ProtectedRoute>
                  <Download />
                </ProtectedRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <ProtectedRoute>
                  <Setting />
                </ProtectedRoute>
              }
            />
            <Route
              path="/submission"
              element={
                <ProtectedRoute>
                  <Submission />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resubmission"
              element={
                <ProtectedRoute>
                  <ReSubmission />
                </ProtectedRoute>
              }
            />
            <Route
              path="/inbox"
              element={
                <ProtectedRoute>
                  <Inbox />
                </ProtectedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
            />

            {/* ADMIN ROUTES */}
            <Route
              path="/admindashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminapplication"
              element={
                <ProtectedRoute>
                  <AdminApplication />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminarchiving"
              element={
                <ProtectedRoute>
                  <AdminArchiving />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminsubmissions"
              element={
                <ProtectedRoute>
                  <Adminsubmissions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admintransfer"
              element={
                <ProtectedRoute>
                  <AdminTransfer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminusers"
              element={
                <ProtectedRoute>
                  <AdminUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminsettings"
              element={
                <ProtectedRoute>
                  <AdminSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminlogout"
              element={
                <ProtectedRoute>
                  <AdminLogout />
                </ProtectedRoute>
              }
            />

            {/* REVIEWER ROUTES */}
            <Route
              path="/reviewerdashboard"
              element={
                <ProtectedRoute>
                  <ReviewerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reviewerstatus"
              element={
                <ProtectedRoute>
                  <Reviewstatus />
                </ProtectedRoute>
              }
            />
            <Route
              path="/assignedprotocol"
              element={
                <ProtectedRoute>
                  <AssignedProtocol />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reviewersettings"
              element={
                <ProtectedRoute>
                  <Reviewersettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reviewerlogout"
              element={
                <ProtectedRoute>
                  <Reviewerlogout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AuthContextProvider>
  );
}

export default App;
