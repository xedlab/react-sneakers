import Card from "../components/Card/Card";
import { AppContext } from "../App";
import React from "react";
import axios from "axios";

export default function Orders() {
  const { addFavorite, addToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://68f62a0f6b852b1d6f16435f.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="content-title">
        <h1>Мои заказы</h1>
      </div>
      <div className="sneakers">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}
