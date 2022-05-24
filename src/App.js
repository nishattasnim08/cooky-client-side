import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Tools from './Pages/Home/Tools/Tools';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="tools" element={<Tools />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
