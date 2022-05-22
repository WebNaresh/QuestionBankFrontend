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



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionSet/:id" element={<Question />} />
          <Route path="/product/:questionCount/:mark/:code/:id" element={<QuestionPaper />} />
        </Routes>

      </Router>
      <Footer />
    </>
  );
}

export default App;
