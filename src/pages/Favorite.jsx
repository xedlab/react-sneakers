import Card from "../components/Card/Card";
import { AppContext } from "../App";
import React from "react";

export default function Favorite({ addFavorite }) {
const {favorites} = React.useContext(AppContext);


  return (
    <div className="content p-40">
      <div className="content-title">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {favorites.map((item, index) => (
          <Card
            key={index}

            isFavoriteCard={true}
            onClickFavorite={addFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
