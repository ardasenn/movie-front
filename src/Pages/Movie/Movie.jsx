import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/ApiCall";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";
import dateFormat, { masks } from "dateformat";
import { Button } from "../../components/Button/Button";
import { addComment } from "../../api/ApiCall";
import { useModal } from "../../contexts/ModalContext";
import { useAuth } from "../../contexts/AuthContext";
import { storage } from "../../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const Movie = () => {
  const [movie, setMovie] = useState(false);
  const { loggedIn } = useAuth();
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const { id } = useParams();
  const { showModal } = useModal();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const imageRef = ref(storage, `images/${id}.jpg`);
    const getUrl = async () => {
      const data = await getDownloadURL(imageRef);
      setUrl(data);
    };
    getUrl();
  }, [movie]);
  useEffect(() => {
    const getData = async () => {
      const response = await getMovie(id);
      setMovie(response.data);
    };
    getData();
  }, []);
  const handleClick = async () => {
    const data = {
      movieId: id,
      text: comment,
      rate,
      customerId: loggedIn.id,
    };
    const response = await addComment(data);
    if (response.isSuccess) {
      response.isSuccess && showModal(response.message, `/movie/${id}`);
      const comments = [data, ...movie.comments];
      const updatedMovie = {
        ...movie,
        comments: comments,
      };
      setMovie(updatedMovie);
    }
  };
  return (
    <div className="flex justify-evenly items-center mt-6">
      <div className="w-[1200px] h-[700px] border-dotted border-2 flex text-white rounded-lg border-secondary">
        <img src={url} className="w-1/2 h-full" alt="" />
        <div className="w-1/2 h-full p-2">
          <div>
            <h1 className="text-5xl font-bold text-center">{movie.name}</h1>
            <div className="flex justify-between text-xl">
              <div className="flex items-center ">
                <FaImdb color="yellow" size={50} className="mr-2" /> :{" "}
                {movie.imdb}
              </div>
              <div className="flex items-center text-secondary">
                {movie.price} <FaTurkishLiraSign size={15} className="ml-1" />
              </div>
            </div>
            <div className="flex  items-center justify-between mt-2">
              <h3 className="text-3xl text-secondary">
                Director :{" "}
                {movie.directorFullName ? movie.directorFullName : "Cem Yılmaz"}
              </h3>
              <div className="text-xl">{movie.salesQuantity} qnt sold</div>
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-3xl text-primary"> Actors</h3>
            <div className="ml-4">
              {movie &&
                movie.actors.map((act) => {
                  return (
                    <a key={act.id}>{` ${act.firstName} ${act.lastName}`}</a>
                  );
                })}
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-3xl text-white"> Genres</h3>
            <div className="ml-4">
              {movie &&
                movie.genres.map((act) => {
                  return <a key={act.id}>{` ${act.name}`}</a>;
                })}
            </div>
          </div>
          <div className="mt-2 bg-secondary rounded-lg">
            <h3 className="text-3xl text-black"> Comments</h3>
            <div className="ml-4 overflow-auto max-h-[330px]">
              {movie &&
                movie.comments.map((cm) => {
                  return (
                    <div key={cm.id} className=" p-1 text-black">
                      <div>
                        {cm.text ||
                          "  Loremipsum dolor sit amet consectetur adipisicing elit. Ratione, culpa quae! Delectus dignissimos, fugit neque placeat maiores voluptas blanditiis, hic soluta repudiandae, amet laborum? Fugit tempora commodi repellat cum modi!"}
                      </div>
                      <div className="flex justify-end gap-2">
                        <div>Rate : {cm.rate}/10</div>
                        <div>
                          {dateFormat(cm.creationDate, "paddedShortDate")}
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[300px] gap-6 rounded-lg text-white font-bold bg-primary p-4">
        <h1 className="text-center text-3xl mb-2">Add Comment</h1>
        <div className="mb-4">
          <textarea
            type="text"
            placeholder="Your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md  h-[120px] Class
            Properties
            resize-none text-black focus:outline-none focus:border-primary"
          />
        </div>
        <hr />
        <div className="flex items-center justify-evenly mt-1">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Rate:</label>
            <select
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className=" p-1 border border-gray-300 rounded-md text-black focus:outline-none focus:border-primary"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <Button backgroundColor="bg-secondary" onClick={handleClick}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
