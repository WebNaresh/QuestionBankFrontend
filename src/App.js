import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import Navbar from "./Utils/Navbar/Navbar";
import Footer from "./Utils/Footer/Footer";
import ScrollToTop from './Utils/ScrollToTop';
import Home from "./Component/Home/Home";
import Question from './Component/Question/Question';
import QuestionPaper from './Component/QuestionPaper/QuestionPaper';
import LoginSignup from './Component/Login/LoginSignup.jsx';
import store from './store';

import { loadUser } from './action/userAction';
import React from 'react';
import { useDispatch } from 'react-redux';




function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionSet/:id" element={<Question />} />
          <Route path="/product/:questionCount/:mark/:code/:id/:questionSetId" element={<QuestionPaper />} />
          <Route path="/login_signup" element={<LoginSignup />} />
        </Routes>

      </Router>
      <Footer />
    </>
  );
}

export default App;
