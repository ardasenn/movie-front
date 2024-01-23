import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { useBasket } from "../../contexts/BasketContext";
export const List = () => {
  const { items, removeFromBasket, emptyBasket } = useBasket();

  const handleRemoveClick = (id) => {
    removeFromBasket(id);
  };
  return (
    <>
      <div className=" bg-secondary w-[900px] h-[600px] rounded-lg overflow-auto p-2">
        {items.map((itm) => {
          return (
            <div
              key={itm.id}
              className="flex justify-between items-center mt-4  text-white font-bold "
            >
              <div className=" flex justify-between items-center w-[450px] mw-[450px] overflow-auto">
                <img src="/doga.jpg" className="w-[110px] h-[80px]" alt="" />
                <div className=" overflow-auto h-[80px] w-[200px] flex items-center text-xl">
                  {itm.name}
                </div>
              </div>
              <div className="flex items-center ">
                <img
                  src="/imdb-svgrepo-com.png"
                  className="w-[30px] h-[20px]"
                  alt="imdb"
                />
                <p className="ml-1">{itm.imdb}</p>
              </div>

              <div className="flex items-center text-xl">
                <p>{itm.price}</p>
                <FaTurkishLiraSign />
              </div>
              <div>
                <MdDeleteForever
                  className="hover:scale-[1.1] text-black"
                  size={25}
                  onClick={() => handleRemoveClick(itm.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
