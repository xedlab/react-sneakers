import React from "react";
import { AppContext } from "../App";

export default function Info({ image, title, description }) {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty">
      <img className="mb-20" width={120} src={image} alt="" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="backGreenButton">
        <img src="/img/arrow.svg" alt="." />
        Вернутся назад
      </button>
    </div>
  );
}
