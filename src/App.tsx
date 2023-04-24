import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";
import { Women } from "./Pages/Women";
import { Kids } from "./Pages/Kids";
import { Home } from "./Pages/Home";
import { Nav } from "./Nav/nav";
import { Clothes } from "./Cloth/clothes";
import { IProduct } from "./modul/modul";

const Product: IProduct = {
  name: "Nike Air Jordan 1",
  id: 1,
  preName: "High retro",
  color: "Light smoke",
  price: 210,
};

const ProductTwo: IProduct = {
  name: "Dior x Air Jordan 1",
  id: 2,
  preName: "High ",
  color: "Light smoke",
  price: 11000,
};

const ProductThree: IProduct = {
  name: "Nike Air Jordan 4",
  id: 3,
  preName: "Retro",
  color: "Metallic Purple",
  price: 190,
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/women"
            element={<Women product={ProductTwo} key={ProductTwo.id} />}
          />
          <Route
            path="/kids"
            element={<Kids productt={ProductThree} key={ProductThree.id} />}
          />
          <Route path="/" element={<Home pro={Product} key={Product.id} />} />
          <Route path="/clothes" element={<Clothes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
