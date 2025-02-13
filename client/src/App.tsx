import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./pages/Loading";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const PostAd = lazy(() => import("./pages/PostAd"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Notfound = lazy(() => import("./pages/Notfound"));

function App() {
  return (
    <Suspense fallback={<div><Loading/></div>}>
       <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-ad" element={<PostAd />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
