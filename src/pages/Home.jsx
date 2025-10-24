
import Card from "../components/Card/Card";
import React from "react";

export default function Home({
  items,

  searchValue,
  setSearchValue,
  onChangeSearchInput,
  addFavorite,
  addToCart,
  isLoading,
}) {


  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onClickFavorite={(obj) => addFavorite(obj)}
        onPlus={(obj) => addToCart(obj)}

        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="content-title">
        <h1>
          {searchValue
            ? `Поиск по запросу: "${searchValue}"`
            : "Все кроссоввки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="removeBtn inputRemove"
              src="/img/btn-remove.svg"
              alt="."
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск"
            type="text"
          />
        </div>
      </div>
      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}
