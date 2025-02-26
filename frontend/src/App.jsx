// export default App;
/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/start.jsx";
import UserLogin from "./pages/userlogin.jsx";
import UserSignup from "./pages/usersignup.jsx";
import CaptainLogin from "./pages/captainlogin.jsx";
import CaptainSignup from "./pages/captainsignup.jsx";
import Home from "./pages/home.jsx";
import UserProtectWrapper from "./pages/UserProtectWraper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainProtectWrapper from "./pages/CaptainProtectWraper.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" 
        element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        } />
        <Route path="/user/logout" 
        element={
          <UserProtectWrapper>
           <UserLogout/>
        </UserProtectWrapper>
        }/>
        <Route path="/captain-home" element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
        }/>
        <Route path="/captain/logout" element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
        }/>
      </Routes>
    </div>
  
    );
}
export default App; 