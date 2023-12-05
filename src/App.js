import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";
import Blog from "./components/Blog";

function App() {
	const token = localStorage.getItem('token');
	const role = localStorage.getItem('role');
  
	return (
	  <Routes>
		{role === 'admin' && <Route path="/admin" element={<AdminDashboard />} />}
		{token && <Route path="/" exact element={<Main />} />}
		<Route path="/signup" exact element={<Signup />} />
		<Route path="/login" exact element={<Login />} />
		<Route path="/" element={<Navigate replace to="/login" />} />
		<Route path="/chatbot" exact element={<Chatbot />} />
		<Route path="/contact-us" exact element={<Contact />} />
		<Route path="/PasswordMeter" exact element={<PasswordStrengthChecker/>} />
		<Route path="/blogs" exact element={<Blog/>} />
	  </Routes>
	);
  }
  
  export default App;