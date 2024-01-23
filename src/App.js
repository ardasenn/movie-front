import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Register } from "./Pages/Auth/Register";
import { SignIn } from "./Pages/Auth/SignIn";
import { Main } from "./Pages/Main/Main";
import { Basket } from "./Pages/Basket/Basket";
import { CustomModal } from "./components/Modal/CustomModal";
import { Orders } from "./Pages/Orders/Orders";
import { Movie } from "./Pages/Movie/Movie";

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
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
      <CustomModal />
    </div>
  );
}

export default App;
