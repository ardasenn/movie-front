import React, { useEffect, useState } from "react";
import { myOrders } from "../../api/ApiCall";
import { useAuth } from "../../contexts/AuthContext";
import dateFormat, { masks } from "dateformat";
export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const { loggedIn } = useAuth();
  useEffect(() => {
    const getData = async () => {
      const response = await myOrders(loggedIn.id);
      setOrders(response.data);
    };
    getData();
  }, []);

  const handleOrderClick = (orderId) => {
    setSelectedOrderId((prevId) => (prevId === orderId ? null : orderId));
  };

  return (
    <>
      <h1 className="text-center text-white  font-extrabold text-4xl">
        Orders
      </h1>
      <div className="flex justify-center ">
        {orders.length <= 0 && (
          <h1 className="mt-10 text-center text-white text-3xl">
            Your Orders is empty
          </h1>
        )}
        {orders.length > 0 && (
          <div className="border-solid border-2 mt-4 border-secondary rounded-lg font-extrabold text-2xl text-white w-[900px] h-[600px] overflow-auto">
            {orders.map((ord) => (
              <div
                key={ord.id}
                className="hover:bg-secondary  p-2 cursor-pointer"
                onClick={() => handleOrderClick(ord.id)}
              >
                <div className="flex justify-between px-10 cursor-pointer mb-2">
                  <div>{ord.movieList.length} Movies bought</div>
                  <div>
                    Total Amount :{" "}
                    {ord.movieList.reduce((acc, cur) => acc + cur.price, 0)} TL
                  </div>
                  <div> {dateFormat(ord.creationDate, "paddedShortDate")}</div>
                </div>
                {ord.movieList.map((mov) => (
                  <div
                    className={`flex text-sm justify-around  px-20 ${
                      selectedOrderId === ord.id ? "" : "hidden"
                    } `}
                    key={mov.id}
                  >
                    <div className="text-left w-[280px]">{mov.name} </div>
                    <div className="text-left w-[60px]">{mov.price} TL</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
