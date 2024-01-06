import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getMovies } from "../../Api/ApiCall";
export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    getData();
  }, []);
  return (
    <div className="flex justify-evenly flex-wrap gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
