const Item = (props) => {
  return (
    <div>
      <div>名前：{props.name}</div>
      <div>価格：{props.price}</div>
    </div>
  );
};

export default Item;
