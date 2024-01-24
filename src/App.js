import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Register } from "./pages/Auth/Register/Register";
import { SignIn } from "./pages/Auth/SignIn/SignIn";
import { Main } from "./pages/Main/Main";
import { Basket } from "./pages/Basket/Basket.jsx";
import { CustomModal } from "./components/Modal/CustomModal";
import { Orders } from "./pages/Orders/Orders";
import { Movie } from "./pages/Movie/Movie";
import { User } from "./pages/User/User";

function App() {
  return (
    <div className=" bg-gradient-to-r from-myBlue to-myPurple  min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/user" element={<User />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
      <CustomModal />
    </div>
  );
}

export default App;
