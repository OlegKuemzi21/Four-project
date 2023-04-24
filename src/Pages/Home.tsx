import React, { useState } from "react";
import { useActions } from "../store/actions";
import { IProduct } from "../modul/modul";
import { useAppSelector } from "../store/redux";

export const Home = ({ pro }: { pro: IProduct }) => {
  const { addClothes, removeFromFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.clothes);

  const [Fav, setFav] = useState(favorites.includes(pro.name));

  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addClothes(pro.name);
    setFav(true);
  };

  const RemoveCloth = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removeFromFavorite(pro.name);
    setFav(false);
  };

  return (
    <div className="h-screen w-full bg-cover bg-pack-train">
      <div className="pt-96 pl-44 ">
        <h1 className="text-7xl font-extrabold mb-2  text-white">{pro.name}</h1>
        <h1 className="text-7xl font-extrabold mb-2 text-white">
          {pro.preName}
        </h1>
        <h3 className="text-4xl font-bold my-4 text-white">{pro.color}</h3>
        <p className="text-3xl my-6 text-white">{pro.price}$</p>
        {!Fav && (
          <button
            className="text-2xl rounded-full bg-white  w-[130px] font-bold py-2 px-4 text-black"
            onClick={addToFavorites}
          >
            Buy now
          </button>
        )}

        {Fav && (
          <button
            className="text-2xl rounded-full bg-white  w-[130px] font-bold py-2 px-4 text-black"
            onClick={RemoveCloth}
          >
            Remove
          </button>
        )}

        <div className="text-end pr-36 ">
          <h3 className="text-3xl font-bold text-white">Release</h3>
          <p className="text-2xl mb-4 text-white">11.7.2020</p>
          <h3 className="font-bold text-3xl  text-white">Design by</h3>
          <p className="text-2xl mb-4 text-white">Jaf Han</p>
          <h3 className="text-3xl font-bold text-white">Product ID</h3>
          <p className="text-2xl text-white ">554724-092</p>
        </div>
      </div>
    </div>
  );
};
