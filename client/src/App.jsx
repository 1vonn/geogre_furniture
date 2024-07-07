import { BrowserRouter, Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Order from "./pages/Order/Order";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/order" element={<Order/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
      
    </>
  )
}

export default App
