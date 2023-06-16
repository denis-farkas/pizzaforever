import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profil from "./Pages/Profil";
import Product from "./Pages/Product";
import Basket from "./Pages/Product";
import Payement from "./Pages/Payement";
import Success from "./components/success";
import Logout from "./Pages/Logout";
import Footer from "./components/footer";
import { UserProvider } from "./context/UserProvider";
import { PizzaProvider } from "./context/PizzaProvider";
import "./App.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <PizzaProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profil" element={<Profil />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/logout" element={<Logout />} />
          </Routes>
          <Footer />
        </PizzaProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
