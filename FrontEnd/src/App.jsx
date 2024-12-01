import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';

import Header from './Components/Main/Header';
import Home from './Components/Main/Home';
import Office from './Components/Main/Office';
import MeetingRoom from './Components/Main/MeetRoom'; // Make sure it's the correct component
import Butik from './Components/Main/Butik';
import ContactUs from './Components/Main/ContactUs';
import AdminPage from './Components/Admin/AdminPage';
import UserPage from './Components/User/UserPage';

import Footer from './Components/Main/Footer';
import LoginModal from './Components/Main/LoginModal';

import { BackgroundProvider } from './context/BackgroundContext'; // Import BackgroundProvider
import MeetingRoomCalendar from './Components/User/MeetingRoomCalendar'; // Booking calendar component

function App() {
  const loginModalRef = useRef(null);

  function openLoginModal() {
    if (loginModalRef.current) {
      loginModalRef.current.openModal();
    }
  }

  return (
    <BackgroundProvider>
      <Router>
        <div className="App" id='App'>
          <Header onLoginClick={openLoginModal} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/office" element={<Office />} />
            <Route path="/meetingroom" element={<MeetingRoom />} /> {/* Regular Meeting Room Page */}
            <Route path="/butik" element={<Butik />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/MeetingRoomCalendar" element={<MeetingRoomCalendar />} /> {/* Updated path for booking calendar */}
          </Routes>
          <LoginModal ref={loginModalRef} />
          <Footer />
        </div>
      </Router>
    </BackgroundProvider>
  );
}

export default App;