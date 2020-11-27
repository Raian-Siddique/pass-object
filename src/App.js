// import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const nayokList = ["JASHIM", "RUBEL", "MANNA", "Bappi"];
  const pd = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$50.99" },
    { name: "Pdf reader", price: "$7.99" },
  ];
  // const productNames = pd.map((pd) => pd.name);
  // console.log(productNames);
  // const nayokListNames = nayokList.map((nayokList) => nayokList);

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users> </Users>
        <ul>
          {pd.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        <ul>
          {nayokList.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {/* <li>{nayokList[0]}</li>
          <li>{nayokList[1]}</li> */}
        </ul>
        {pd.map((pds) => (
          <Product product={pds}></Product>
        ))}

        {/* <Product product={pd[0]}></Product>
        <Product product={pd[1]}></Product> */}
      </header>
    </div>
  );
}
// writtig an state for my function.
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  //const handleIncrease = () =>
  // {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return (
    <div>
      <h1>Count:{count} </h1>
      {/* <button onClick={handleIncrease}> Increase</button> */}
      <button onMouseMove={() => setCount(count + 1)}> Increase</button>
      <button onClick={() => setCount(count - 1)}> Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("calling effect");
  });
  return (
    <div>
      <h3>Dynamic Users</h3>
    </div>
  );
}

function Product(props) {
  const pdstyle = {
    border: "1px solid light-salmon",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "5px",
    padding: "10px",
  };
  const { name, price } = props.product;

  return (
    <div style={pdstyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
