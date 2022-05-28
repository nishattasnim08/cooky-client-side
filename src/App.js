import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Tools from './Pages/Home/Tools/Tools';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Summary from './Pages/Home/Summary/Summary';
import Reviews from './Pages/Home/Reviews/Reviews';
import Blog from './Pages/Blogs/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';
import LogIn from './Authentication/LogIn/LogIn';
import Error from './Pages/Shared/404/Error';
import BestS from './Pages/Home/BestS/BestS';
import Subscribe from './Pages/Home/Subscribe/Subscribe';
import SignUp from './Authentication/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AddProduct from './Pages/Dashboard/Dashboard/AddProduct/AddProduct';
import Profile from './Pages/Dashboard/Profile/Profile';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/order" element={<Order />} />
        <Route path="/bSummary" element={<Summary />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/bSelling" element={<BestS />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/addReview" element={<AddReview />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/myProfile" element={<Profile />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
