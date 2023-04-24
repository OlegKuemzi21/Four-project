import React, { useState } from "react";
import { useActions } from "../store/actions";
import { IProduct } from "../modul/modul";
import { useAppSelector } from "../store/redux";

export const Kids = ({ productt }: { productt: IProduct }) => {
  const { addClothes, removeFromFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.clothes);

  const [Fav, setFav] = useState(favorites.includes(productt.name));

  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addClothes(productt.name);
    setFav(true);
  };

  const RemoveCloth = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removeFromFavorite(productt.name);
    setFav(false);
  };

  return (
    <div className="h-screen w-full bg-center  bg-kids-clothe">
      <div className="pt-96 pl-44 ">
        <h1 className="text-7xl font-extrabold mb-2  text-black	">
          {productt.name}
        </h1>
        <h1 className="text-7xl font-extrabold mb-2 text-black">
          {productt.preName}
        </h1>
        <h3 className="text-4xl font-bold my-4 text-black">{productt.color}</h3>
        <p className="text-3xl my-6 text-black">{productt.price}$</p>
        {!Fav && (
          <button
            className="text-2xl rounded-full  w-[130px] font-bold py-3 px-2 text-black bg-white"
            onClick={addToFavorites}
          >
            Buy now
          </button>
        )}

        {Fav && (
          <button
            className="text-2xl rounded-full  w-[130px] font-bold py-3 px-2 text-black bg-white"
            onClick={RemoveCloth}
          >
            Remove
          </button>
        )}

        <div className="text-end pr-36 ">
          <h3 className="text-3xl font-bold text-black">Release</h3>
          <p className="text-2xl mb-4 text-blakc">20.5.2022</p>
          <h3 className="font-bold text-3xl  text-black">Design by</h3>
          <p className="text-2xl mb-4 text-balck">? ? ?</p>
          <h3 className="text-3xl font-bold text-black">Product ID</h3>
          <p className="text-2xl text-black">CT8527-115</p>
        </div>
      </div>
    </div>
  );
};
