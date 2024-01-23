import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getMovies } from "../../Api/ApiCall";
import { useNavigate } from "react-router-dom";
export const Main = () => {
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const data = await getMovies();
      setMovies(data.data);
    };
    getData();
  }, []);
  const handleClick = (id) => navigate(`/movie/${id}`);
  return (
    <div className="mx-11 my-10 flex  justify-start flex-wrap gap-11">
      {movies &&
        movies.map((mov) => (
          <Card
            key={mov.id}
            data={mov}
            onClick={() => {
              handleClick(mov.id);
            }}
          />
        ))}
      <Card />
    </div>
  );
};
