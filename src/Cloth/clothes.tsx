import { useActions } from "../store/actions";
import { useAppSelector } from "../store/redux";

export const Clothes = ({ rem }: any) => {
  const { favorites } = useAppSelector((state) => state.clothes);
  const { removeFromFavorite } = useActions();

  const removeItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  if (favorites.length === 0)
    return (
      <>
        <h1 className="mt-10 text-3xl font-bold text-center">Your Basket</h1>
        <p className="text-center text-2xl font-bold pt-80">
          Please choose something
        </p>
      </>
    );

  return (
    <div className="text-center ">
      <h1 className="my-10 text-3xl font-bold ">Your basket</h1>
      <div className="flex justify-center pl-28 ">
        <ul className="pr-10 ">
          {favorites.map((f) => (
            <div className="flex mb-6 ">
              <li key={f} className="pr-10 text-2xl font-semibold">
                {f}
              </li>
              <button className="text-2xl font-medium" onClick={removeItem}>
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
