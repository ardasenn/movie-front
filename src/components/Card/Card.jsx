import React from "react";

export const Card = ({ children, data }) => {
  return (
    <div className="h-[440px] w-[250px] hover:bg-secondary">
      <img src="/doga.jpg" className="w-[250px] h-[320px]" alt="" />
      <p className="text-xl text-white  mt-2  font-bold">
        {data?.name ? data.name : "No Time To Die"}
      </p>
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
          <p className="ml-3">{data?.imdb ? data.imdb : "6.6"}/100</p>
        </div>
        <p className="font-bold">{data?.price ? data.price : "100"} TL</p>
      </div>
      <p className="mt-1 text-primary">
        {data?.genres.map((gnr) => gnr.name)} Action,Adeventure,Thriller
      </p>
      {children}
    </div>
  );
};
