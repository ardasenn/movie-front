import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getMovies } from "../../Api/ApiCall";
export const Main = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies();
      setMovies(data.data);
    };
    getData();
  }, []);
  return (
    <div className="flex justify-evenly flex-wrap gap-2">
      {movies && movies.map((mov) => <Card key={mov.id} data={mov} />)}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
