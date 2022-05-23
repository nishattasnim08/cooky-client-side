import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Tools from './Pages/Home/Tools/Tools';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Tools />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
