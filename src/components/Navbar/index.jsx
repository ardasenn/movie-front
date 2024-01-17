import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../Button";
import { FaShoppingBasket } from "react-icons/fa";
import { useBasket } from "../../contexts/BasketContext";

export const Navbar = () => {
  const { loggedIn, setLoggedIn } = useAuth();
  const { items } = useBasket();
  return (
    <div
      className="navbar-container w-full flex  justify-between
     items-center  text-zinc-100 font-bold px-4"
    >
      <div className="mt-2 flex items-center">
        <Link to="/">
          <img
            className="h-[80px] w-[125px] mr-3 text-primary"
            src="/movie2.svg"
            alt="logo"
          />
        </Link>
        <p className="text-2xl">
          Movie<span className="text-primary">Store</span>
        </p>
      </div>
      <div className="flex justify-between items-center">
        {loggedIn && (
          <>
            <Link to="/basket" className="relative">
              <p className=" text-secondary absolute right-1 -top-3  text-lg font-extrabold">
                {items.length > 0 && items.length}
              </p>
              <FaShoppingBasket size={25} className="mr-2" />
            </Link>
            <Link to="/orders" className=" hover:text-zinc-500 mr-2">
              Siparişlerim
            </Link>
            <Link>
              <Button
                onClick={() => setLoggedIn(null)}
                backgroundColor="bg-secondary"
              >
                Çıkış yap
              </Button>
            </Link>
          </>
        )}
        {!loggedIn && (
          <>
            <Link to="register">
              <Button backgroundColor="bg-myPurple">Sign Up</Button>
            </Link>
            <Link to="signin">
              <Button isBordered={true}>Sign In</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
