import React from "react";
import { List } from "../../components/List/List";
import { useBasket } from "../../contexts/BasketContext";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { Button } from "../../components/Button/Button";
import { useAuth } from "../../contexts/AuthContext";
import { giveOrder } from "../../Api/ApiCall";
import { useModal } from "../../contexts/ModalContext";

export const Basket = () => {
  const { loggedIn } = useAuth();
  const { showModal } = useModal();
  const { items, emptyBasket } = useBasket();
  const totalAmount = items.reduce((acc, cur) => acc + cur.price, 0);

  const handleGiveOrder = async () => {
    if (items.length <= 0) return;
    const order = {
      customerId: loggedIn.id,
      movieIds: [...items.map((itm) => `${itm.id}`)],
    };
    const response = await giveOrder(order);
    if (response.isSuccess) {
      emptyBasket();
      showModal(response.message, "/");
    }
    showModal(response.message, "/basket");
  };
  return (
    <>
      <div className="flex mt-10 justify-evenly items-center">
        {items.length > 0 ? (
          <List />
        ) : (
          <h1 className="text-center text-white text-3xl">
            Your basket is empty
          </h1>
        )}

        <div className="w-[300px] h-[200px] flex  flex-col justify-between rounded-lg text-white font-bold bg-primary p-2">
          <h1 className="text-center text-3xl">Order Summary</h1>
          <div>
            <div className="mb-2">{items.length} Movies</div>
            <hr />
          </div>
          <div className="flex items-center justify-around justify-end">
            <div className="flex items-center">
              Total : {totalAmount} <FaTurkishLiraSign />
            </div>
            <Button backgroundColor="bg-secondary" onClick={handleGiveOrder}>
              Complete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
