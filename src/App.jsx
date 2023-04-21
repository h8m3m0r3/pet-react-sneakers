import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Overlay from "./components/Overlay";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://643ebfc66c30feced83228c7.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://643ebfc66c30feced83228c7.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
    axios
      .get("https://64412cc5792fe886a8a0643b.mockapi.io/favorite")
      .then((res) => setFavorites(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://643ebfc66c30feced83228c7.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://643ebfc66c30feced83228c7.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  // mock api авториз через гугл
  const onAddFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => (favObj.id === obj.id))) {
        axios.delete(
          `https://64412cc5792fe886a8a0643b.mockapi.io/favorite/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://64412cc5792fe886a8a0643b.mockapi.io/favorite",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное")
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Overlay
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddFavorite={onAddFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/favorites">
        <Favorites items={favorites} onAddFavorite={onAddFavorite} />
      </Route>
    </div>
  );
}

export default App;
