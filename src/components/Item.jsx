const Item = (props) => {
  return (
    <div style={{ color: props.price >= 500 ? "red" : "black" }}>
      <div>名前：{props.name}</div>
      <div>価格：{props.price}</div>
      {props.price >= 10000 ? <div>高額商品</div> : <></>}
      {props.price <= 100 ? <div>格安商品</div> : <></>}
    </div>
  );
};

export default Item;
