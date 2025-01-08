import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ContactForm from "./Pages/ContactForm";

import JobProfileSection from "./Pages/Profile";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/Aboutus";
import Footersection from "./LandingPage/FooterSection";
import CoursePage from "./Pages/CoursePage";

import { useEffect, useState } from "react";
import axios from "axios";


import Resume from "./Pages/Resume";

import RT from "./Pages/RT";
import NavBar from "./LandingPage/NavBar";
// import { ShimmerCategoryItems } from "shimmer-effects-react";
import PaymentSuccess from "./Pages/PaymentSucess";
import JobSection from "./components/JobSection/Job";
import CoursesPage from "./components/CoursePage/TrendingCourse";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ComingSoon from "./Pages/ComingSoon";


import AdminPanel from './Pages/AdminPanel';

import AdminLogin from "./Pages/AdminLogin";
import AdminCoursesPage from "./components/Admin/AdminCoursesPage";
import AdminUserPage from "./components/Admin/AdminUserPage";




const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/Course" element={<CoursesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/template" element={<RT />} />
          <Route path="/Courses" element={<CoursePage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
           <Route
            path="/payment-success"
            element={
              
                <PaymentSuccess />
             
            }
          />
          <Route path="/contact" element={<ContactForm />} />
        
          <Route path="/adminlogin" element={<AdminLogin />} />

          <Route
  path="/admin"
  element={
   
      <AdminPanel />
 
  }
/>




<Route
          path="/admin/courses"
          element={
            <ProtectedRoute>
              <AdminCoursesPage />
            </ProtectedRoute>
          }
        />

<Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AdminUserPage/>
            </ProtectedRoute>
          }
        />





        
        <Route path="/career" element={<ComingSoon />} />
      
      
      
   




           <Route path="/Privacy Policy" element={<PrivacyPolicy />} />
    


          
         
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <JobProfileSection />
              </ProtectedRoute>
            }
          />
         
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/JobSection" element={<JobSection/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<LandingPage />} /> {/* Default route */}
        </Routes>
      </Router>
      <div className="   fixed"></div>
      <Footersection />
    </>
  );
};

export default App;

const ProtectedRoute = ({ children }) => {
  const [Authenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/check`,
          { withCredentials: true }
        );

        setIsAuthenticated(response.data.Authenticated);
      } catch (error) {
        console.error(error); // Log error to the console
        setIsAuthenticated(false); // Set as false if there's an error
      } finally {
        setLoading(false); // Set loading to false after API call completes
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div>
        <NavBar />
      </div>
    ); // Show loading message while waiting for response
  }

  if (Authenticated === null || !Authenticated) {
    return <Navigate to="/login" />; // Redirect if not authenticated
  }

  return children; // Render children if authenticated
};

const ProtectionLayer = ({ children }) => {
  const [isRecruiter, setIsRecruiter] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state for better UX

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/check`,
          { withCredentials: true }
        );
        console.log(response.data.WhoIAm); // Check response to verify data structure
        if (response.data.WhoIAm === "recruiter") {
          setIsRecruiter(true);
        } else {
          setIsRecruiter(false);
        }
      } catch (error) {
        console.error(error); // Log error for debugging
        setIsRecruiter(false); // Treating failure as non-recruiter
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };
    checkAuth();
  }, []);

  if (loading)
    return (
      <div>
        <NavBar />
      </div>
    ); // Show loading state while checking auth

  if (isRecruiter === null) {
    return <Navigate to="/landing" />;
  }

  return isRecruiter ? children : <Navigate to="/Profile" />;
};
