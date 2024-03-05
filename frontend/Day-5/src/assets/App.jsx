// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import NavDropdownExample from './pages/Home';
// import LoginPage from './pages/Login';
// import SignupForm from "./pages/Register";
// import Footer from "./components/Footer";
// import Profile from "./pages/profile";
// import Cards from "./pages/Card";
// import Form1 from "./pages/Form";
// import Sidebar from "./components/Sidebar";
// import Select1 from "./pages/selected";
// import PaymentPage from "./components/Paymentpage";
// import PaymentHistoryPage from "./pages/history";
// import ContactForm from "./pages/Contact";

// function Appp() {
//   return (
  
//   <Router>
//     <Routes>
//       <Route  path ="/" element = {<LoginPage />} />
//       <Route  path ="/home" element = {<NavDropdownExample />} />
//       <Route  path ="/signup" element = {< SignupForm/>} />
//       <Route  path ="/Footer" element = {< Footer/>} />
//       <Route  path ="/profile" element = {< Profile/>} />
//       <Route  path ="/card1" element = {< Cards/>} />
//       <Route  path ="/form21" element = {< Form1/>} />
//       <Route  path ="/sidebar" element = {< Sidebar/>} />
//       <Route  path ="/select1" element = {< Select1/>} />
//       <Route  path ="/pay" element = {< PaymentPage/>} />
//       <Route  path ="/payhistory" element = {< PaymentHistoryPage/>} />
//       <Route  path ="/contact" element = {< ContactForm/>} />
//     </Routes>
//   </Router>
   
//   );
// }

// export default Appp;


import '../src/assets/css/Home.css';

import  { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import loadingImage from '../src/assets/images/Loading.gif'; // Import the image

// Lazy load the components
const LazyLoginPage = lazy(() => import("./pages/Login"));
const LazyHome = lazy(() => import("./pages/Home"));
const LazySignupForm = lazy(() => import("./pages/Register"));
const LazyFooter = lazy(() => import("./components/Footer"));
const LazyProfile = lazy(() => import("./pages/profile"));
const LazyCards = lazy(() => import("./pages/Card"));
const LazyForm1 = lazy(() => import("./pages/Form"));
const LazySidebar = lazy(() => import("./components/Sidebar"));
const LazySelect1 = lazy(() => import("./pages/selected"));
const LazyPaymentPage = lazy(() => import("./components/Paymentpage"));
const LazyPaymentHistoryPage = lazy(() => import("./pages/history"));
const LazyContactForm = lazy(() => import("./pages/Contact"));
const LazyAdmin = lazy(() => import("./components/admin"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><img className="loading-image"></img><img src={loadingImage} alt="Loading..." /></div>}>
        <Routes>
          <Route path="/" element={<LazyLoginPage />} />
          <Route path="/home" element={<LazyHome />} />
          <Route path="/signup" element={<LazySignupForm />} />
          <Route path="/Footer" element={<LazyFooter />} />
          <Route path="/profile" element={<LazyProfile />} />
          <Route path="/card1" element={<LazyCards />} />
          <Route path="/form21" element={<LazyForm1 />} />
          <Route path="/sidebar" element={<LazySidebar />} />
          <Route path="/select1" element={<LazySelect1 />} />
          <Route path="/pay" element={<LazyPaymentPage />} />
          <Route path="/payhistory" element={<LazyPaymentHistoryPage />} />
          <Route path="/contact" element={<LazyContactForm />} />
          <Route path="/admin" element={<LazyAdmin />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
