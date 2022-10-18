const Item = (props) => {
  return (
    <div style={{ color: props.price >= 500 ? "red" : "black" }}>
      <div>名前：{props.name}</div>
      <div>価格：{props.price}</div>
    </div>
  );
};

export default Item;
