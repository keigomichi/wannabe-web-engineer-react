import { useState } from "react";
import Item from "./Item";
const ItemList = () => {
  const [items] = useState([
    { name: "りんご", price: 300 },
    { name: "バナナ", price: 200 },
    { name: "いちご", price: 1000 },
    { name: "ぶどう", price: 10000 },
  ]);

  return (
    // ここにItemコンポーネントを並べる
    <div>
      <h2>商品リスト</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <Item name={item.name} price={item.price} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
