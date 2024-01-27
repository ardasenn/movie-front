import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { useBasket } from "../../contexts/BasketContext";
import { storage } from "../../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const Card = ({ children, data, onClick }) => {
  const { items, addToBasket, removeFromBasket } = useBasket();
  const [isOnBasket, setIsOnBasket] = useState(false);
  const [url, setUrl] = useState(null);
  const handleClick = () => {
    isOnBasket ? removeFromBasket(data.id) : addToBasket({ url, ...data });
    setIsOnBasket(!isOnBasket);
  };
  const imageRef = ref(storage, `images/${data.id}.jpg`);
  useEffect(() => {
    const getUrl = async () => {
      const data = await getDownloadURL(imageRef);
      setUrl(data);
    };
    getUrl();
  }, []);
  return (
    <div className="h-[440px] w-[250px] relative hover:scale-[1.07] ease-in duration-300">
      <img src={url} className="w-[250px] h-[320px]" alt="" onClick={onClick} />
      <p className="text-xl text-white  mt-2  font-bold  overflow-hidden max-h-7">
        {data?.name ? data.name : "No Time To Die"}
      </p>
      <IoAddCircle
        onClick={handleClick}
        className="absolute right-0 top-0 hover:scale-150 text-white w-6 h-6"
      />
      <p className="text-primary text-xs">
        {data?.salesQuantity ? data.salesQuantity : "100"} quantity sold
      </p>
      <div className="flex justify-between  text-white">
        <div className="flex items-center ">
          <img
            src="/imdb-svgrepo-com.png"
            className="w-[30px] h-[20px]"
            alt="imdb"
          />
          <p className="ml-3">{data?.imdb ? data.imdb : "6.6"}/10</p>
        </div>
        <p className="font-bold">{data?.price ? data.price : "100"} TL</p>
      </div>
      <p className="mt-1 text-primary">
        {data?.genres.map((gnr) => `${gnr.name} `)}
      </p>
      {children}
    </div>
  );
};
