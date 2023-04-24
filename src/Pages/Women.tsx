import React, { useState } from "react";
import { IProduct } from "../modul/modul";
import { useAppSelector } from "../store/redux";
import { useActions } from "../store/actions";

export const Women = ({ product }: { product: IProduct }) => {
  const { addClothes, removeFromFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.clothes);

  const [FavTwo, setFavTwo] = useState(favorites.includes(product.name));

  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addClothes(product.name);
    setFavTwo(true);
  };

  const RemoveCloth = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removeFromFavorite(product.name);
    setFavTwo(false);
  };

  return (
    <div className="h-screen w-full bg-center bg-women-clothe">
      <div className="pt-96 pl-44 ">
        <h1 className="text-7xl font-extrabold mb-2  text-stone-800	">
          {product.name}
        </h1>
        <h1 className="text-7xl font-extrabold mb-2 text-stone-800">
          {product.preName}
        </h1>
        <h3 className="text-4xl font-bold my-4 text-stone-800">
          {product.color}
        </h3>
        <p className="text-3xl my-6 text-stone-800">{product.price}$</p>
        {!FavTwo && (
          <button
            className="text-2xl rounded-full  w-[130px] font-bold py-2 px-4 text-stone-800 bg-slate-200"
            onClick={addToFavorites}
          >
            Buy now
          </button>
        )}
        {FavTwo && (
          <button
            className="text-2xl rounded-full  w-[130px] font-bold py-2 px-4 text-stone-800 bg-slate-200"
            onClick={RemoveCloth}
          >
            Remove
          </button>
        )}
        <div className="text-end pr-36 ">
          <h3 className="text-3xl font-bold text-stone-800">Release</h3>
          <p className="text-2xl mb-4 text-stone-800">08.7.????</p>
          <h3 className="font-bold text-3xl  text-stone-800">Design by</h3>
          <p className="text-2xl mb-4 text-stone-800">Someone Millioner</p>
          <h3 className="text-3xl font-bold text-stone-800">Product ID</h3>
          <p className="text-2xl text-stone-800">CN8607-002</p>
        </div>
      </div>
    </div>
  );
};
