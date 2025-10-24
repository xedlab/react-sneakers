import styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";

export default function Card({
  id,
  onClickFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  isFavoriteCard = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(isFavoriteCard);

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, parentId: id, price });
  };
  const onClickFavoriteCard = () => {
    onClickFavorite({ id, imageUrl, title, parentId: id, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={198}
          viewBox="0 0 150 198"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="110" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="130" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="170" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="166" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {" "}
          {onClickFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                onClick={onClickFavoriteCard}
                src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
                alt="."
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="" />
          <h5>{title}</h5>
          <div className={styles.cardMain}>
            <div className={styles.cardCount}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>

            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"
                }
                alt="."
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
