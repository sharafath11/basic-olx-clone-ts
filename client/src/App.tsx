import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";



const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const AddProduct = lazy(() => import("./pages/AddProduct"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Notfound = lazy(() => import("./pages/Notfound"));

function App() {
  const user = localStorage.getItem("token")
  console.log("dfhtrsh",user)
  return (
    <Suspense fallback={<div><Loading /></div>}>
       <ToastContainer />
       <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AddProduct" element={user ? <AddProduct /> : <Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer/>
    </Suspense>
  );
}

export default App;
