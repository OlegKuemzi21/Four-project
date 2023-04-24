import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="  flex justify-between items-center  mt-6 mb-4 ">
      <h2 className="text-2xl font-bold ml-10">
        <Link to={"/"}>Store</Link>
      </h2>

      <div className="text-lg font-bold mx-auto">
        <Link to={"/"} className="mr-40 hover:rounded-full  py-2 px-4">
          Men
        </Link>
        <Link to={"/women"} className="mr-40 hover:rounded-full  py-2 px-4">
          Women
        </Link>
        <Link to={"/Kids"} className="mr-40 hover:rounded-full  py-2 px-4">
          Kids
        </Link>
        <Link to={"/clothes"} className="py-2 px-4 pr-32">
          Clothes
        </Link>
        <Link to={"/about"} className="hover:rounded-full  py-2 px-4">
          About us
        </Link>
      </div>
    </div>
  );
};
