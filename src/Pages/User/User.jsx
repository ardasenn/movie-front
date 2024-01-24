import React, { useEffect, useState } from "react";
import { getUserDetail } from "../../Api/ApiCall";
import { useAuth } from "../../contexts/AuthContext";
import dateFormat, { masks } from "dateformat";
export const User = () => {
  const { loggedIn } = useAuth();
  const [user, setUser] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const response = await getUserDetail(loggedIn.id);
      setUser(response.data);
    };
    getData();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="w-[800px] h-[300px] rounded-lg mt-4 py-4 px-10  text-white bg-secondary">
        <h1 className="text-center text-4xl">User Details</h1>
        <div className="flex justify-between mt-4 text-2xl">
          <div className="flex gap-4">
            <p>First Name :</p>
            <p className=" text-myBlue font-semibold">{user.firstName}</p>
          </div>
          <div className="flex gap-4 w-[350px] text-left">
            <p>Last Name :</p>
            <p className=" text-myBlue font-semibold">{user.lastName}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-2xl">
          <div className="flex gap-4">
            <p>Email :</p>
            <p className=" text-myBlue font-semibold">{user.email}</p>
          </div>
          <div className="flex gap-4 w-[350px] text-left">
            <p>Phone Number :</p>
            <p className=" text-myBlue font-semibold">
              {user.phoneNumber || "000"}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-2xl">
          <div className="flex gap-4">
            <p>User Name :</p>
            <p className=" text-myBlue font-semibold">{user.userName}</p>
          </div>
          <div className="flex gap-4 w-[350px] text-left">
            <p>Register Date :</p>
            <p className=" text-myBlue font-semibold">
              {dateFormat(user.creationDate, "paddedShortDate")}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-2xl">
          <div className="flex gap-4">
            <p>Balance :</p>
            <p className=" text-myBlue font-semibold">{user.balance}</p>
          </div>
          <div className="flex gap-4 w-[350px] text-left">
            <p>Orders Count :</p>
            <p className=" text-myBlue font-semibold">{user.ordersCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
