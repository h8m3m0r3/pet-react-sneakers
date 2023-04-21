import React from "react";
import Card from "../components/Card/Card";

function Favorites({ items, onAddFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb  -40">
        <h1>Избранное</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onFavorite={onAddFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
