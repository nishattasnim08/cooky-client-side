import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Tools from './Pages/Home/Tools/Tools';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Summary from './Pages/Home/Summary/Summary';
import Reviews from './Pages/Home/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/bSummary" element={<Summary />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
